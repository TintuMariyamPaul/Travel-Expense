const fs = require("fs");
const path = require("path");

const resetFolders = ["node_modules", "package-lock.json", ".expo"];

resetFolders.forEach((folder) => {
  const targetPath = path.resolve(__dirname, "../", folder);
  if (fs.existsSync(targetPath)) {
    console.log(`Removing ${targetPath}`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
});

console.log("Reset complete. Run `npm install` to reinstall dependencies.");
