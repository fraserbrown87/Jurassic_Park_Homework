const Park = function(name) {
  this.name = name;
  this.enclosure = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
  this.enclosure.splice(dinosaur);
};

Park.prototype.removeType = function (type) {
  let dinosToKeep = [];
  for(var dinosaur of this.enclosure){
    if(dinosaur.type !== type){
      dinosToKeep.push(dinosaur);
    }
  }
  this.enclosure = dinosToKeep;
};

Park.prototype.removeOffspring = function (offspring) {
let foundDino = [];
for (var i = 0; i < this.enclosure.length; i++) {
  if (this.enclosure[i].offspring > offspring){
    foundDino.push(this.enclosure[i]);
  }
}
return foundDino;
};




module.exports = Park;
