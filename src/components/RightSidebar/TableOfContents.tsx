import React, { useState, useEffect, useRef } from "react";
import type { MarkdownHeading } from "astro";

type ItemOffsets = {
  id: string;
  topOffset: number;
};

const TableOfContents: React.FC<{ headings: MarkdownHeading[] }> = ({ headings = [] }) => {
  const itemOffsets = useRef<ItemOffsets[]>([]);
  // FIXME: Not sure what this state is doing. It was never set to anything truthy.
  const [activeId] = useState<string>("");
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)");
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);

    return () => {
      window.removeEventListener("resize", getItemOffsets);
    };
  }, []);

  return (
    <>
      <h2 className="heading">On this page</h2>
      <ul>
        {headings
          .filter(({ depth }) => depth < 4)
          .map((heading) => (
            <li className={`heading-link depth-${heading.depth} ${activeId === heading.slug ? "active" : ""}`.trim()}>
              <a href={`#${heading.slug}`}>{heading.depth === 1 ? "Overview" : heading.text}</a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TableOfContents;
