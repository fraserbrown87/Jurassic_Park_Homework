const Park = function(name) {
  this.name = name;
  this.dinosaurs = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
  this.dinosaurs.splice(dinosaur);
};


module.exports = Park;
