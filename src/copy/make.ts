/**
 * Every sentence a visitor reads, for one language — read from that
 * language's home document (`jtk/content/index.json`, `jtk/content/de.json`)
 * rather than written here, with the handful of strings that are not content
 * (the chrome, the form's own messages, the privacy page) passed in.
 *
 * `src/copy/en.ts` and `src/copy/de.ts` each call this once; `src/copy/index.ts`
 * hands a component the right one for the page it is on. The shape is the one
 * the components import — HOME, FORM, NAV, FOOTER, STRIPS, PRIVACY, the
 * `block` / `picture` / `gallery` readers — so nothing in a component has to
 * know where its text came from, nor which language it is in.
 */

export interface Shown {
  readonly name: string;
  readonly alt: string;
  /** `data-jtk-path` for this picture: `blocks[3].work[7].src`. */
  readonly path?: string;
  /** A clip's poster — the still every refused autoplay lands on. */
  readonly poster?: string;
}

export type Block = Record<string, unknown> & { type: string };
export type Item = Record<string, unknown>;

/** A home document, as the file holds it. */
export interface HomeDocument {
  seo?: { title?: string; description?: string };
  blocks: unknown[];
}

/** What is not content: the chrome and the messages, per language. */
export interface Strings {
  lang: string;
  ogLocale: string;
  titleSuffix: string;
  form: {
    required: string;
    privacy: string;
    sending: string;
    success: string;
    error: string;
    invalidName: string;
    invalidContact: string;
    invalidMessage: string;
    demoNote: string;
  };
  nav: {
    home: string;
    links: readonly { href: string; label: string }[];
    book: string;
    menu: string;
    /** The switcher's own words: the name of each language, in that language. */
    languages: Record<string, string>;
    switch: string;
  };
  footer: { hours: string; find: string; write: string; privacy: string; sample: string; description: string };
  strips: {
    services: { eyebrow: string; title: string; all: string };
    team: { all: string; bookWith: string };
    work: { eyebrow: string; title: string };
    blog: { all: string; read: string; back: string; by: string; empty: string };
  };
  privacy: {
    title: string;
    intro: string;
    formTitle: string;
    formBody: string;
    whoTitle: string;
    whoBody: string;
    askTitle: string;
    askBody: string;
    ownTitle: string;
    ownBody: string;
  };
  a11y: { skipToContent: string };
}

const ANNOTATE = import.meta.env.PUBLIC_JTK_ANNOTATE !== 'false';

export function makeCopy(page: HomeDocument, S: Strings) {
  const blocks = page.blocks as unknown as Block[];

  const block = (type: string): { at: number; of: Block } => {
    const at = blocks.findIndex((candidate) => candidate.type === type);
    return at === -1 ? { at: -1, of: { type } } : { at, of: blocks[at]! };
  };
  const str = (of: Block, key: string): string => (of[key] as string) ?? '';
  const rows = (of: Block, key: string): Item[] => (of[key] as Item[]) ?? [];

  const pathAt = (at: number, field: string, item?: number, subField?: string): string | undefined => {
    if (!ANNOTATE) return undefined;
    if (at < 0 || at >= blocks.length) return undefined;
    return item === undefined ? `blocks[${at}].${field}` : `blocks[${at}].${field}[${item}].${subField}`;
  };

  const jtkPath = (type: string, field: string, item?: number, subField?: string): string | undefined => {
    if (!ANNOTATE) return undefined;
    const { at } = block(type);
    if (at === -1) return undefined;
    return item === undefined ? `blocks[${at}].${field}` : `blocks[${at}].${field}[${item}].${subField}`;
  };

  const picture = (of: Block, at: number, key: string): Shown => ({
    name: str(of, key),
    alt: str(of, `${key}_alt`),
    path: pathAt(at, key),
  });

  const gallery = (of: Block, at: number, key: string): Shown[] =>
    rows(of, key).flatMap((item, i) => {
      const src = (item.src as string) ?? '';
      if (!src) return [];
      return [{ name: src, alt: (item.alt as string) ?? '', poster: (item.poster as string) || undefined, path: pathAt(at, key, i, 'src') }];
    });

  const hero = block('hero').of;
  const cta = block('cta_banner').of;

  const META = { lang: S.lang, ogLocale: S.ogLocale, titleSuffix: S.titleSuffix } as const;

  const HOME = {
    title: page.seo?.title ?? '',
    description: page.seo?.description ?? '',
    hero: {
      eyebrow: str(hero, 'eyebrow'),
      heading: str(hero, 'title'),
      lead: str(hero, 'lead'),
      cta: str(hero, 'cta_label'),
      ctaHref: str(hero, 'cta_href') || '#contact',
      image: str(hero, 'image'),
      imageAlt: str(hero, 'image_alt'),
    },
  } as const;

  const FORM = {
    title: str(cta, 'title'),
    lead: str(cta, 'lead'),
    name: str(cta, 'name_label'),
    contact: str(cta, 'contact_label'),
    message: str(cta, 'message_label'),
    required: S.form.required,
    requiredNote: str(cta, 'required_note'),
    privacy: S.form.privacy,
    submit: str(cta, 'cta_label'),
    sending: S.form.sending,
    success: S.form.success,
    error: S.form.error,
    invalidName: S.form.invalidName,
    invalidContact: S.form.invalidContact,
    invalidMessage: S.form.invalidMessage,
    demoNote: S.form.demoNote,
  } as const;

  return {
    META,
    HOME,
    FORM,
    NAV: S.nav,
    FOOTER: S.footer,
    STRIPS: S.strips,
    PRIVACY: S.privacy,
    A11Y: S.a11y,
    PAGE: blocks as readonly Block[],
    block,
    str,
    rows,
    picture,
    gallery,
    jtkPath,
    pathAt,
  };
}

export type Copy = ReturnType<typeof makeCopy>;
