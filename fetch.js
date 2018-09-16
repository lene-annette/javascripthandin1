const fetch = require("node-fetch");

let swapiPromises = [];

for(let i = 1; i<51; i++){
    const p = fetch("https://swapi.co/api/people/" + i)
    .then(res=>res.json())
    swapiPromises.push(p);
}

Promise.all(swapiPromises)
.then(all => {
    const names = all.map(person => person.name).join(", ");
    console.log(names);
})


