const fs = require("fs");
const path = require("path");


var readDirFiltered = function(pathToDir,extension){
  return new Promise((resolve, reject) => {
    const ext = "." + extension;
    fs.readdir(pathToDir,(err,data)=>{
      if(err){
       reject(err);
      }
      var files = data.filter(filename=>path.extname(filename) === ext);
      resolve(files);
    });
  });
} 

module.exports = readDirFiltered;