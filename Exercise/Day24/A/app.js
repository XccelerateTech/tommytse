const promisedFS = require("./PromisedFs");
const pathModule = require("path");

function filename(path) {
  promisedFS
    .readdir(path)
    .then(files => {
      for (let file of files) {
        const filePath = pathModule.join(path, file);
        determineFileType(filePath);
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function determineFileType(filePath) {
  promisedFS
    .stat(filePath)
    .then(stats => {
      if (stats.isDirectory()) {
        console.log(filePath + " is a directory.");
        filename(filePath);
      } else {
        console.log(filePath + " is a file.");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

determineFileType('./files');
