/**
 * The copy for a language: the site's own for `''`, German for `'de'`.
 *
 *   const C = copyFor(localeOf(Astro.url.pathname));
 *   <h2>{C.STRIPS.services.title}</h2>
 */
import { COPY as en } from './en';
import { COPY as de } from './de';
import type { Copy } from './make';

const BY_LOCALE: Record<string, Copy> = { '': en, de };

export function copyFor(locale: string): Copy {
  return BY_LOCALE[locale] ?? en;
}

export type { Copy, Shown } from './make';
