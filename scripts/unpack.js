const decompress = require("decompress");
const fs = require('fs');
const output_dir = "src";

fs.rmSync(output_dir, { recursive: true, force: true });

decompress("saved.sb3", output_dir)
  .then((files) => {
    // console.log(files);
  })
  .catch((error) => {
    console.log(error);
  });
