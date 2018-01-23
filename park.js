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

};


module.exports = Park;
