const readDirFiltered = require("./readDirFiltered");
var pathToFiles = process.argv[2];
var ext = process.argv[3];

readDirFiltered(pathToFiles,ext)
.then(data => console.log(data))
.catch(err=> console.log("UPS: " + err))

/*
readDirFiltered(pathToFiles,ext, function(err,data){
    if(err){
        return console.log("Ups: " + err);
    }
    console.log(data);
})
*/