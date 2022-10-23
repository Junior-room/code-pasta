import fs from "fs";

const PAGES_PATH = "./src/pages";

const getNavigationMap = (path = PAGES_PATH) => {
  const filesAndDirs = fs.readdirSync(path);

  return filesAndDirs.map((f) => {
    const isFile = f.includes("."); // please, don't use dots in folder names
    const isDirectory = !isFile;

    if (isFile) {
      const filePath = path + "/" + f;
      const formattedFilePath = filePath.replace(PAGES_PATH, "");
      return { [formattedFilePath]: "" };
    }

    if (isDirectory) {
      const dirPath = path + "/" + f;
      return { [dirPath.replace(PAGES_PATH, "")]: getNavigationMap(dirPath) };
    }
  });
};

export default getNavigationMap;
