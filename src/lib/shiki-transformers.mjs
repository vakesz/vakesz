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
              "aria-live": "polite",
            },
            children: [
              { type: "text", value: "Copy" },
              {
                type: "element",
                tagName: "span",
                properties: { className: ["sr-only"] },
                children: [{ type: "text", value: " code" }],
              },
            ],
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
