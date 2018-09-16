const pf = require("./promiseFactory");
let promises = [pf("a",1000),pf("b",2000),pf("c",3000),pf("d",2000)];

Promise.all(promises)
.then(allResults => {
    console.log(allResults);
})

