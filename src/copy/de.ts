/**
 * German — the site's second language. The sentences are the German home
 * document's (`jtk/content/de.json`, the file the platform keeps for the
 * page at `/de`); the chrome and the messages are here. Swiss spelling: no ß.
 */
import page from '../../jtk/content/de.json';
import { makeCopy, type Strings } from './make';

export const DE: Strings = {
  lang: 'de',
  ogLocale: 'de_CH',
  titleSuffix: ' — Atelier Nord',
  form: {
    required: 'Pflichtfeld',
    privacy: 'Was Sie uns schreiben, verwenden wir nur, um Ihnen zu antworten.',
    sending: 'Wird gesendet…',
    success: 'Vielen Dank — wir melden uns.',
    error: 'Das hat nicht geklappt. Bitte versuchen Sie es noch einmal oder rufen Sie uns an.',
    invalidName: 'Bitte nennen Sie uns einen Namen, mit dem wir Sie ansprechen dürfen.',
    invalidContact: 'Bitte hinterlassen Sie eine Telefonnummer oder eine E-Mail-Adresse.',
    invalidMessage: 'Bitte schreiben Sie ein paar Worte dazu, worum es geht.',
    demoNote: 'Dies ist eine Vorschau — das Formular sendet noch nichts.',
  },
  nav: {
    home: 'Atelier Nord',
    links: [
      { href: '/services', label: 'Leistungen & Preise' },
      { href: '/team', label: 'Das Team' },
      { href: '/about', label: 'Über uns' },
      { href: '/blog', label: 'Journal' },
      { href: '/contact', label: 'Kontakt' },
    ],
    book: 'Termin buchen',
    menu: 'Menü',
    languages: { en: 'English', de: 'Deutsch' },
    switch: 'Sprache',
  },
  footer: {
    hours: 'Öffnungszeiten',
    find: 'So finden Sie uns',
    write: 'Schreiben oder anrufen',
    privacy: 'Datenschutz',
    sample: 'Eine Beispielseite auf jtakeit — das Geschäft ist erfunden.',
    description: 'Ein Coiffeursalon mit drei Stühlen in Zürich, Kreis 5 — Schneiden, Färben und Föhnen, online gebucht.',
  },
  strips: {
    services: { eyebrow: 'Leistungen', title: 'Was es kostet, und wie lange es dauert', all: 'Alle Leistungen und die Online-Buchung' },
    team: { all: 'Das Team kennenlernen', bookWith: 'Termin bei {name} buchen' },
    work: { eyebrow: 'Die Arbeit', title: 'Was vom Stuhl geht' },
    blog: { all: 'Alle Beiträge', read: 'Lesen', back: 'Zurück zum Journal', by: 'Aus dem Journal', empty: 'Noch nichts geschrieben.' },
  },
  privacy: {
    title: 'Datenschutz',
    intro: 'Diese Seite sagt, was mit dem geschieht, was Sie über das Formular dieser Website senden. Sie ist zum Lesen geschrieben, nicht zum Zustimmen.',
    formTitle: 'Wenn Sie uns schreiben',
    formBody: 'Wir erhalten Ihren Namen, den Weg, über den wir Sie erreichen sollen — eine Telefonnummer, eine E-Mail-Adresse oder beides — und das, was Sie geschrieben haben. Sonst nichts: keinen Standort, nichts über die Seiten, die Sie angeschaut haben, und nichts, was Sie zwischen zwei Besuchen wiedererkennt.',
    whoTitle: 'Wer es sonst noch sieht',
    whoBody: 'Diese Website läuft auf jtakeit, das speichert, was Sie senden, und es an uns weitergibt. Was dort damit geschieht, und wie lange, steht hier:',
    askTitle: 'Nachfragen',
    askBody: 'Schreiben Sie oder rufen Sie an — wir sagen Ihnen, was wir über Sie gespeichert haben, oder löschen es.',
    ownTitle: 'Über uns',
    ownBody: 'Atelier Nord ist ein Coiffeursalon an der Josefstrasse, 8005 Zürich. Was Sie über das Formular senden, lesen die drei, die hier arbeiten, und sonst niemand; wir behalten es, bis Ihre Frage beantwortet und der Termin, falls es einen gibt, vorbei ist. Dies ist eine Beispielseite auf jtakeit: der Salon ist erfunden, und alle, die darin arbeiten, auch.',
  },
  a11y: { skipToContent: 'Zum Inhalt' },
};

export const COPY = makeCopy(page, DE);
export const { META, HOME, FORM, NAV, FOOTER, STRIPS, PRIVACY, A11Y, PAGE, block, str, rows, picture, gallery, jtkPath, pathAt } = COPY;
