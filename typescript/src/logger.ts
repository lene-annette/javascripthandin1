
function logger(a,b){
    console.log(`value 1: ${a}, value 2: ${b}`);
}

var a = 1, b = "Hello";
logger(a,b);

function loggerV2(a: string, b:number){
    console.log(`value 1: ${a}, value 2: ${b}`);
}

loggerV2(b,a);

interface IPerson {name:string};
interface IAddress {street: string};

function loggerV3(a:IPerson,b:IAddress){
    console.log(`value 1: ${a}, value 2: ${b}`);
}
loggerV3({name:"Kurt"},{street:"Lyngbyvej 1"});

class Person implements IPerson{
    constructor(name:string){
        this.name = name;
    }
    name: string;
}

class Address implements IAddress{
    constructor(street:string){
        this.street = street;
    }
    street: string;
}

let p = new Person("Kurt");
let add = new Address("Lyngbyvej 23");

loggerV3(p,add);

class GenericLogger<T,U>{
    log= (a:T, b:U) => console.log(`value 1: ${a}, value 2: ${b}`);
}

var logger1 = new GenericLogger<IPerson,IAddress>();
logger1.log(p,add);
var logger2 = new GenericLogger<number,string>();
logger2.log(1,"hello");

