import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return (tree, { data }) => {
    const text = toString(tree);
    const { minutes } = getReadingTime(text);
    data.astro.frontmatter.minutesRead = Math.max(1, Math.round(minutes));
  };
}
