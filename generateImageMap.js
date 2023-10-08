const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "assets", "cards");
const outputPath = path.join(__dirname, "assets", "images.js");

// read files from images dir
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const exportObject = files
    .map((file) => {
      const name = path.basename(file, path.extname(file));
      return `  "${name}": require("./cards/${file}")`;
    })
    .join(",\n");

  const outputContent = `export const images = {\n${exportObject}\n};\n`;

  // write to output
  fs.writeFile(outputPath, outputContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing images.js", err);
      process.exit(1);
    }
    console.log("Image mapping generated at:", outputPath);
  });
});
