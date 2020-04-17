const dbname = "DnD.json";
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(dbname);
const db = low(adapter);


const {Campaign, CharacterInstance} = require("./DnD/campaign.js");
const {Character} = require("./DnD/characters.js");


let char = new CharacterInstance({
  "name":"It's just a character",
  "description":"Once upon a time, there was a very bad wolf... who ate a fox... and then puked out a sheep... which it then ate again... the end",
  "non standard info":"non standard value"
});
console.log(char.printChracterSheet())


module.exports = {
  "CommandArray" : [
    {
      "name":"character",
      "description":"Create RP characters for DnD campagins or more! WIP",
      "run": async function run(client, msg, args, command){
        
        switch (args[0]){
          case "create":
            break;
          case "edit":
            break;
          case "show":
            break;
          default:
            msg.channel.send("Didn't understand, I'm afraid.");
        }
      }
    }
  ]
}


