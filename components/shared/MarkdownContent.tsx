type MarkdownContentProps = {
  content: string;
};

type MarkdownBlock =
  | { content: string; type: "heading"; level: 2 | 3 }
  | { items: string[]; type: "list" }
  | { content: string; type: "paragraph" };

function getBlocks(content: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = content.split("\n");
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ content: paragraph.join(" "), type: "paragraph" });
    paragraph = [];
  };

  const flushList = () => {
    if (list.length) blocks.push({ items: list, type: "list" });
    list = [];
  };

  for (const line of lines) {
    const heading = line.match(/^(##|###)\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ content: heading[2], level: heading[1].length as 2 | 3, type: "heading" });
      continue;
    }

    const item = line.match(/^\s*-\s+(.+)$/);
    if (item) {
      flushParagraph();
      list.push(item[1]);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="markdown-content">
      {getBlocks(content).map((block, index) => {
        if (block.type === "heading") {
          return block.level === 2 ? <h2 key={index}>{block.content}</h2> : <h3 key={index}>{block.content}</h3>;
        }

        if (block.type === "list") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block.content}</p>;
      })}
    </div>
  );
}
