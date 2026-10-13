# Atelier Nord — brief

Read on 9 October 2026; brought in line with the repository on 11 October 2026. Sources: the developer (jtakeit, for the showcase), and the repository's own history where a decision was made in a commit. A sample site: the business is invented, the facts are the sample's own.

## In one sentence
A three-chair hair salon in Zürich Kreis 5 that wants its regulars to book online instead of calling, and new people to find it for «hair salon Zürich».

## The one action
Book a time.

## Facts
| Fact | Value | Source |
| --- | --- | --- |
| Name | Atelier Nord | developer |
| Address | Josefstrasse, 8005 Zürich — no house number, the sample's own | developer |
| Phone | 044 000 00 00 — not a number that can be dialled | developer |
| Email | hello@ateliernord.example | developer |
| Hours | Mon–Fri 9–18, Sat 9–15 | developer |
| Zone | Europe/Zurich, from the address | developer |
| Currency | CHF, in `jtk/site.json`; every price whole francs | developer |
| Paid online or on the spot | on the spot, card or TWINT | developer |
| Services | eight, with time and price (below) | developer |
| Masters | Noa Keller (Tue–Sat), Elif Demir, Jonas Brunner (below) | developer |
| Languages | English, and German (`LOCALES = ['de']`) | developer, 10 October 2026 |
| Journal | four posts in English, two of them also in German | developer, 10 October 2026 |
| Photographs | from Pexels, credited in CREDITS.md | developer |
| The mark | «AN» in paper on ink with a copper dot, drawn for the sample (`public/favicon.svg`), not the scaffold's monogram | developer, 10 October 2026 |
| Slug | atelier-nord | `jtk/site.json` |
| Repository | `fastlane-sites-stg/showcase-salon`; its public twin is `jtakeit/showcase-salon` | developer |
| Domain | NEEDS CLIENT — none in the repository | — |

### Services
| Service | Takes | Costs |
| --- | --- | --- |
| Men's cut | 45 min | CHF 65 |
| Women's cut & style | 60 min | CHF 95 |
| Children's cut (under 12) | 30 min | CHF 40 |
| Beard trim | 20 min | CHF 30 |
| Wash & blow-dry | 30 min | CHF 45 |
| Full colour | 120 min | CHF 180 |
| Highlights & balayage | 150 min | CHF 220 |
| Keratin smoothing | 90 min | CHF 160 |

### Masters
| Master | Own hours | Does |
| --- | --- | --- |
| Noa Keller | Tue–Fri 9–18, Sat 9–15 | women's cut, full colour, highlights, blow-dry, keratin |
| Elif Demir | the salon's | women's cut, children's cut, full colour, blow-dry |
| Jonas Brunner | the salon's | men's cut, beard trim, children's cut |

## Bookings
The kit: salon, whole (`jtk/bookings.json`, kit version 2). The form on the services page is the kit's own (`@jtakeit/kit` 0.5.2).

| Asked | Answer | Source |
| --- | --- | --- |
| Zone | Europe/Zurich, said back from the address | developer |
| Hours | Mon–Fri 9–18, Sat 9–15 | developer |
| The services | the eight above, each with its time and price | developer |
| The masters | the three above; Noa keeps her own hours, the others follow the salon's | developer |

| Default | Confirmed / changed to | Source |
| --- | --- | --- |
| Confirmed at once (`confirm: auto`) | confirmed | developer |
| Cancel or move until 3 hours before (`cancel_until`) | confirmed | developer |
| Nothing paid online (`payment: no`) | confirmed — paid at the salon, card or TWINT | developer |
| Sixty days ahead (`horizon`) | confirmed | developer |
| An hour's lead (`lead`) | confirmed | developer |
| Ten minutes after each booking (`buffer`) | confirmed | developer |
| Start times every fifteen minutes (`slot_every`) | confirmed | developer |
| Several services in one visit (`combine`) | kept, as the kit has it; not said back in the brief of 9 October | `jtk/bookings.json` |
| Visitors see each master's name, what is booked and its price | kept; the masters have no other marks | `jtk/content/masters` |
| A new booking goes where the enquiries go | NEEDS CLIENT — a person links the chat or the email in the panel; the repository cannot say | — |

## The site
- **Pages:** home (`/`), about (`/about`), team (`/team`), contact and opening hours (`/contact`), privacy (`/privacy`), the journal (`/blog`), and the services page (`/services`), which lists the eight services with the booking form under it.
- **Collections:** `services` (eight, no pages of their own: rows of `/services`), `masters` (three, each with a page at `/masters/<slug>`), `blog` (four posts, newest first, each at `/blog/<slug>`).
- **Languages:** every page in English and in German under `/de` — home, about, team, contact, privacy, the journal, the services and the masters. Of the journal, «The free first look» and «Colour before winter» are in German; «A child's first haircut» and «Saturday mornings» are in English only. A feed and a sitemap per language, a language switcher, `hreflang`.
- **The enquiry form**, on the home and the contact page, asks only what it is about.

## Decisions
- Prices shown in CHF, whole francs; the currency is read from `jtk/site.json`, never written into a page.
- The enquiry form asks only what it is about.
- About is a page of its own, not a text block on the home page as the brief of 9 October had it; team and contact became pages too. Decided in the design pass the same day (commit b1b6ddb). The home page keeps a short text about the salon above the team.
- A journal and German were added on 10 October 2026, when the scaffold made both its defaults (commit c232da2): the `blog` collection with four posts, and German for every page. The brief of 9 October named neither. The cost the guide warns of stands: German is a second site to keep written, every page and every post.
- Two of the four posts are not in German; the German journal shows two.
- The booking form is the kit's (from commit 86a37d8), in the site's styles; the site's own form before it is gone.
- The masters' German pages say what the English ones say (12 October 2026): Elif trained in Istanbul and Zürich, Jonas in a barbershop in Basel — the German had given both other histories.

## Open — NEEDS CLIENT
- Photographs of the salon and the three masters: the site wears Pexels pictures (CREDITS.md), and the people in them are not Noa, Elif or Jonas.
- Where a new booking and an enquiry are sent: a person links the Telegram chat or the email in the panel.
- The domain.

## Done when
- [x] every fact has a source, and every gap is NEEDS CLIENT
- [x] the kit is taken whole, or each thing taken out is under Decisions
- [ ] every default has been said back and answered — `combine` and where a new booking goes were not in the brief of 9 October
- [x] the icon: the business's mark, or the monogram said back and accepted
- [x] the developer has read the brief and said yes — to the brief of 9 October, and again on 12 October to this one, brought in line on 11 October
- [x] zone: the business's time zone — from its address; say it back rather than asking
- [x] hours: when it is open — the kit does not guess them
- [x] the services: each one's takes and costs
- [x] the masters: who they are, their own hours when they differ, what each one does
