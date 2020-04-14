class PictureAttribute {
  constructor(){

  }
}

class BasicTextAttribute {
  constructor(text){
    this.value = text;
  }
}

class BasicCharacterStat {
  constructor(value){
    if(!NaN(value)){
      this.value = value;
    } else {
      console.error("BasicCharacterStat NaN: " + value);
    }
  }
}

// let characterAtributes = ['name', 'race', 'description', 'backstory'];
let characterAtributes = {
  'picture': PictureAttribute,
  'name': BasicTextAttribute, 
  'race': BasicTextAttribute, 
  'description': BasicTextAttribute, 
  'backstory': BasicTextAttribute
};

module.exports.Character = class Character {
  constructor(obj){
    // Object.entries(characterAtributes)
    // this.race = obj.race || "undefined";
  }
  // delete(){
  //   this.delete()
  // }
  printChracterSheet(){
    let fields = [];
    Object.entries(this).forEach((key, value)=>{
      fields.push({
        "name":key,
        "vakue":value
      });
    })
    return { "embed":{
      "title":"charactersheet for "+ this.name,
      "description": this.description || "no description",
      "timestamp": new Date,
      "fields":fields
    }}
  }
}



