/**
 * Wrap each Shiki code block in a <figure> with a header showing the
 * filename (from ```lang title="foo.c") or language, plus a copy button.
 */
export function transformerCodeMeta() {
  return {
    name: "vakesz:code-meta",
    root(node) {
      const meta = this.options?.meta?.__raw ?? "";
      const titleMatch = meta.match(/title="([^"]+)"/);
      const lang = this.options?.lang ?? "text";
      const label = titleMatch ? titleMatch[1] : lang;

      const header = {
        type: "element",
        tagName: "div",
        properties: { className: ["code-header"] },
        children: [
          {
            type: "element",
            tagName: "span",
            properties: {
              className: titleMatch ? ["code-filename"] : ["code-lang"],
            },
            children: [{ type: "text", value: label }],
          },
          {
            type: "element",
            tagName: "button",
            properties: {
              type: "button",
              className: ["code-copy"],
              "aria-label": "Copy code",
            },
            children: [{ type: "text", value: "Copy" }],
          },
        ],
      };

      const figure = {
        type: "element",
        tagName: "figure",
        properties: { className: ["code-block"] },
        children: [header, ...node.children],
      };

      node.children = [figure];
    },
  };
}
