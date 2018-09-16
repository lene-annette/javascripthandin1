const fetch = require("node-fetch");

async function serial(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe the await 
      await fetch("https://swapi.co/api/people/" + i) //intet sker før vi har fået svar på dette specifikke request. 
        .then(res => { return res.json() }));
  }
  console.log(swappiPeople.map(p=>p.name).join(", "));
}
async function parallel(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe no await
      fetch("https://swapi.co/api/people/" + i)
        .then(res => { return res.json() }));
  }
  const allEntries = await Promise.all(swappiPeople); //Her vil vi godt vente på at alle er klar
  console.log(allEntries.map(p=>p.name).join(", "));  
  
}
//Time each of the two strategies
//serial(15);
parallel(15);