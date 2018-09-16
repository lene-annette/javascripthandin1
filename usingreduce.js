var all = ["Lars","Peter","Jan","Bo"];

// join with different seperators 
console.log(all.join(","));
console.log(all.join(" "));
console.log(all.join("#"));

// reduce
var numbers = [2,3,67,33];
function sum(accumulator, currentValue){
    return accumulator+currentValue;
}
console.log(numbers.reduce(sum));

let members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Janne", age: 25},
    {name: "Martin", age: 22}
];
//var reducer = function(accumulator,member,index,arr), return average age of all members. 
var averageAge = function(accumulator,member,index,arr){
    accumulator += member.age;
    if(index === arr.length-1){
        return accumulator/arr.length;
    }
    return accumulator;
};
console.log(members.reduce(averageAge,0));

// counting votes 
var votes = ["Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
var counter = function(vote){
    
}

// var a = {}
// if (a["clinton"])
//  console.log("I Will Not Print")
// a["clinton"] = 1;
// console.log("You will see me")
// console.log("Value of clinton "+ a["clinton"]);
