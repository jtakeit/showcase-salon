/**
 * The site's own language. The sentences are the home document's
 * (`jtk/content/index.json`), which the admin edits; what is here is the
 * chrome and the messages — see `make.ts`.
 */
import page from '../../jtk/content/index.json';
import { makeCopy, type Strings } from './make';

export const EN: Strings = {
  lang: 'en',
  ogLocale: 'en_GB',
  titleSuffix: ' — Atelier Nord',
  form: {
    required: 'Required',
    privacy: 'We use what you send only to answer you.',
    sending: 'Sending…',
    success: 'Thank you — we will be in touch.',
    error: 'That did not send. Please try again, or call us.',
    invalidName: 'Please give a name we can call you by.',
    invalidContact: 'Please leave a phone number or an email address.',
    invalidMessage: 'Please write a few words about what you need.',
    demoNote: 'This is a preview — the form does not send anything yet.',
  },
  nav: {
    home: 'Atelier Nord',
    links: [
      { href: '/services', label: 'Services & prices' },
      { href: '/team', label: 'The team' },
      { href: '/about', label: 'About' },
      { href: '/blog', label: 'Journal' },
      { href: '/contact', label: 'Contact' },
    ],
    book: 'Book a time',
    menu: 'Menu',
    languages: { en: 'English', de: 'Deutsch' },
    switch: 'Language',
  },
  footer: {
    hours: 'Opening hours',
    find: 'Find us',
    write: 'Write or call',
    privacy: 'Privacy',
    sample: 'A sample site on jtakeit — the business is invented.',
    description: 'A three-chair hair salon in Zürich Kreis 5 — cuts, colour and blow-dries, booked online.',
  },
  strips: {
    services: { eyebrow: 'Services', title: 'What it costs, and how long it takes', all: 'All services and the booking form' },
    team: { all: 'Meet the team', bookWith: 'Book a time with {name}' },
    work: { eyebrow: 'The work', title: 'What leaves the chair' },
    blog: { all: 'All posts', read: 'Read', back: 'Back to the journal', by: 'From the journal', empty: 'Nothing written yet.' },
  },
  privacy: {
    title: 'Privacy',
    intro: 'This page says what happens to what you send through the form on this website. It is written to be read, not to be agreed to.',
    formTitle: 'When you write to us',
    formBody: 'We are given your name, the way you asked us to reach you — a telephone number, an email address, or both — and whatever you wrote. Nothing else: no location, nothing about the pages you looked at, and nothing that identifies you between visits.',
    whoTitle: 'Who else sees it',
    whoBody: 'This website runs on jtakeit, which stores what you send and passes it to us. What they do with it, and for how long, is set out here:',
    askTitle: 'Asking us',
    askBody: 'Write or ring, and we will tell you what we hold about you or delete it.',
    ownTitle: 'About us',
    ownBody: 'Atelier Nord is a hair salon at Josefstrasse, 8005 Zürich. What you send through the form is read by the three of us who work here and by nobody else; we keep it until your question is answered and the appointment, if there is one, has passed. This is a sample site built on jtakeit: the salon is invented, and so is everybody who works in it.',
  },
  a11y: { skipToContent: 'Skip to content' },
};

export const COPY = makeCopy(page, EN);
export const { META, HOME, FORM, NAV, FOOTER, STRIPS, PRIVACY, A11Y, PAGE, block, str, rows, picture, gallery, jtkPath, pathAt } = COPY;
export type { Shown } from './make';
