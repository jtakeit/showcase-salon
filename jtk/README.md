# jtk/

What the admin publishes into this repository.

| | |
| --- | --- |
| `catalogue.json` | **you write this.** What blocks this site is made of. The admin draws its forms from it and the annotation lint checks the built HTML against it. |
| `content/*.json` | **publish writes these**, one per page. The text and pictures the site says. |
| `content/**/*.md` | **publish writes these too**, one per entry of a collection — a blog post and the like. Frontmatter is the entry's fields, the body is its body, and the address is where the file sits. |
| `site.json` | publish writes this: the business's own facts — name, address, phone. |
| `<module>.json` | publish writes this for each module the catalogue turns on — `bookings.json` holds when the business is open, how long a slot is, how long an unconfirmed booking holds it. The shape is ours; the values are the owner's. |
| `shared.json` | **publish writes this**: the text that is on every page — a footer note, a strapline. It has no address and no route; every page that renders one of its fields annotates it as `shared:blocks[0].note`. |

Editing `content/` by hand is legitimate — writing a post here in your
editor is a supported way to write one: a commit here *is* the published state,
and the next publish imports it back as the draft. What you should not do
is expect a hand edit on the build branch to survive a publish that happens
before it is imported — publish writes the whole file.
