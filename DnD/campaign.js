const {Character} = require("./characters.js");

module.exports.CharacterInstance = class CharacterInstance extends Character {
  constructor(obj){
    super(obj);
  }
}

module.exports.Campaign = class Campaign {
  constructor(DM){
    this.DM = DM;
    this.characters = [];
  }

}