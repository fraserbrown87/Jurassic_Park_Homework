const Park = function(name) {
  this.name = name;
  this.dinosaurs = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};


module.exports = Park;
