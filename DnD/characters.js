class PictureAttribute {
  constructor(url){
    this.value = url.url || url || "";
  }

  show(){
    return this.value;
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
  'backstory': BasicTextAttribute,
  'languages': BasicTextAttribute
};

module.exports = {
  "Character":"somthing"
};

module.exports.Character = class Character {
  constructor(obj){
    for (let [key, value] of Object.entries(obj)) {
      if(true){ //later compare key with list of valid character infos
        this[key] = value;
      }
    }
    // Object.entries(characterAtributes)
    // this.race = obj.race || "undefined";
  }
  // delete(){
  //   this.delete()
  // }
  printChracterSheet(){
    let fields = [];
    for (let [name, value] of Object.entries(this)) {
      fields.push({name, value, "inline":true});
    }
    // Object.entries(this).forEach((name, value)=>{
    //   fields.push({name, value, "inline":true});
    // })
    return { "embed":{
      "title":"charactersheet for "+ this.name,
      "description": this.description || "no description",
      "timestamp": new Date,
      "fields":fields
    }}
  }
}



