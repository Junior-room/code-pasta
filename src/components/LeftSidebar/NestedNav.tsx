import React, { useState } from "react";

type NavItems = {
  [key: string]: NavItems | string;
}[];

interface INestedNav {
  pages: NavItems;
  headingLevel: number;
  heading?: string;
}

function NestedNav({ pages, headingLevel = 2, heading }: INestedNav) {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <button
        onClick={() => setShowNav((prev) => !prev)}
        className="my-1 px-3 rounded-md w-full block text-left hover:bg-blue-900"
      >
        <NavHeading headingLevel={headingLevel}>{heading}</NavHeading>
      </button>
      {showNav && (
        <ul className="mx-1">
          {pages.map((page) => {
            const [path, children] = Object.entries(page)[0]; // page has only one property
            const isFile = typeof children === "string";

            const childNavLevel = headingLevel + 1;
            const childNavHeading = path.split("/").at(-1);

            const isIndexFile = path.includes("index");
            const linkHref = !isIndexFile && path.split(".").slice(0, -1)[0];

            if (isFile && isIndexFile) return null;

            const isEmptyDirectory = !isFile && Object.entries(children).length === 0;
            if (isEmptyDirectory) return null;

            return (
              <li key={path}>
                {isFile ? ( //
                  <a href={linkHref} className="inline-block my-2 px-3">
                    {path.split("/").at(-1)}
                  </a>
                ) : (
                  <NestedNav //
                    pages={children}
                    headingLevel={childNavLevel}
                    heading={childNavHeading}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default NestedNav;

interface INavHeading {
  headingLevel: number;
  children: string;
}
const NavHeading: React.FC<INavHeading> = ({ headingLevel, children }) => {
  switch (headingLevel) {
    case 2:
      return <h2 className="pl-0 my-2">{children}</h2>;
    case 3:
      return <h3 className="pl-0 my-2">{children}</h3>;
    case 4:
      return <h4 className="pl-0 my-2">{children}</h4>;
    case 5:
      return <h5 className="pl-0 my-2">{children}</h5>;
    case 6:
      return <h6 className="pl-0 my-2">{children}</h6>;
    default:
      return null;
  }
};
