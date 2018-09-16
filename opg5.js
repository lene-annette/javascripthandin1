const fs = require("fs");
const path = require("path");

// const pathToDir = process.argv[2];
// const filterPath = "." + process.argv[3];

const readdirFiltered;

var readdirFiltered = function(pathToDir,filterPath,cb){
    fs.readdir(pathToDir,(err,data)=>{
        if(err){
            cb(err);
        }
        var files = data.filter(filename=>path.extname(filename) === filterPath);
        cb(null,files);
        
    })
};



// fs.readdir(pathToDir, (err,data)=>{
//     if(err){
//         throw new Error("Ups!");
//     }
//     var files = data.filter(filename=>path.extname(filename) === filterPath);

//     console.log(files)
// });