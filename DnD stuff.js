const dbname = "DnD.json";
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(dbname);
const db = low(adapter);


const {Campaign, CharacterInstance} = require("./DnD/campaign.js");
const {Character} = require("./DnD/characters.js");


let char = new CharacterInstance({
  "name":"It's just a character"
});
console.log(char.printChracterSheet())