const dbname = "DnD.json";
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(dbname);
const db = low(adapter);


const {Campaign, CharacterInstance} = require("./DnD/campaign.js");
const {Character} = require("./DnD/characters.js");


// let char = new CharacterInstance({
//   "name":"It's just a character",
//   "description":"Once upon a time, there was a very bad wolf... who ate a fox... and then puked out a sheep... which it then ate again... the end", //wut
//   "non standard info":"non standard value"
// });
// console.log(char.printChracterSheet())


module.exports = {
  "CommandArray" : [
    {
      "name":"character",
      "description":"Create RP characters for DnD campagins or more! WIP",
      "adminOnly": true,
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
    },
    {
      "category":["main"],
      "name":"roll",
      "description":"rolls dice; Usage: roll 1d6, roll 2d4 1d20",
      // "adminOnly": false,
      // "MemberOnly": false,
      "run": async function run(client, msg, args) {

        function dice(times, sides){
          let value = 0;
          for (var i = 0; i < times; i++) {
            value += Math.ceil(Math.random()*sides);
          }
          return value;
        }

        let diceValues = [];
        let response = "";
        args.forEach((input) => {
          let isDice = input.match(/([0-9]{1,})d([0-9]{1,})/i);
          if (isDice) {
            if (isDice[1]=="0" || isDice[2]=="0") return; //invaid, nothing to calc here!
            let result = dice(isDice[1], isDice[2]);
            diceValues.push(result);
          } else {
            //do nothing for now
            //at a later time, this will log mathematical operators, so the array can then be split and grouped in accordance;
          }
        });
        response = `Result:  ${(diceValues.length >1?
          diceValues.reduce((a,b)) + " = "
          :"")
          + diceValues.reduce((a, b) => a + b, 0)}`;
        msg.channel.send(response);
      }
    }
  ]
}


