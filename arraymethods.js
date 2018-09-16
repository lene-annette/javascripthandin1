var arr = ['Jan','Peter','Bo','Lars','Frederik','Per'];

// callbacks
function nameBySize(name){
    return name.length <= 3;
}
function toUpperCase(name){
    return name.toUpperCase();
}

// using filter
var filtered = arr.filter(nameBySize);
console.log("Filtered: "+ filtered);

// using map
var mapped = arr.map(toUpperCase); 
console.log("Mapped: " + mapped);

// implementing own filter method
function myFilter(array, callback){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        if(callback(array[i]) == true){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
var filtered2 = myFilter(arr,nameBySize);
console.log("My own filter: " + filtered2)

// implementing own map method
function myMap(array, callback){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}
var mapped2 = myMap(arr,toUpperCase);
console.log("My own map: " + mapped2);

//using prototype property
function protoFilter(callback){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
Array.prototype.protoFilter = protoFilter;
console.log("prototype filter: " + arr.protoFilter(nameBySize));

function protoMap(callback){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
        newArr.push(callback(this[i]));
    }
    return newArr;
}
Array.prototype.protoMap = protoMap;
console.log("prototype map: " + arr.protoMap(toUpperCase));