const promiseFactory = require("./promiseFactory");

let results = [];

promiseFactory("Hello", 2000)
.then(d=>{
    results.push(d);
    return promiseFactory("hello hello", 3000);
})
.then(d=>{
    results.push(d);
    return promiseFactory("Hello class", 4000);
})
.then(d=>{
    results.push(d);
    console.log("All: " + results.join(", "))
})
.catch(err=>console.log(err));