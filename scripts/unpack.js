const decompress = require("decompress");

decompress("saved.sb3", "src")
  .then((files) => {
    // console.log(files);
  })
  .catch((error) => {
    console.log(error);
  });
