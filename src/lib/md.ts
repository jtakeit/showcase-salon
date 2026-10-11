/**
 * A page block's markdown body as HTML.
 *
 * Collection entries go through Astro's own markdown (entryLoader.ts); a
 * page's `markdown` field does not, and `set:html` of the raw text is one
 * paragraph with no breaks. This is the small subset a page body uses —
 * paragraphs, `##` headings, emphasis, links — and nothing that would need
 * a sanitiser: the text is this repository's own.
 */
const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(text: string): string {
  return esc(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|#[^)\s]*)\)/g, '<a href="$2">$1</a>');
}

export function md(source: string): string {
  return source
    .split(/\n\s*\n/)
    .map((raw) => raw.trim())
    .filter(Boolean)
    .map((para) => {
      const heading = /^(#{2,4})\s+(.+)$/.exec(para);
      if (heading) {
        const level = heading[1].length;
        return `<h${level}>${inline(heading[2])}</h${level}>`;
      }
      if (/^[-*]\s+/m.test(para)) {
        const items = para.split(/\n/).map((line) => line.replace(/^[-*]\s+/, '')).map((line) => `<li>${inline(line)}</li>`);
        return `<ul>${items.join('')}</ul>`;
      }
      return `<p>${inline(para).replace(/\n/g, '<br>')}</p>`;
    })
    .join('\n');
}
