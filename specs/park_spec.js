const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe ('Park', function(){
  let park1, park2;
  let dinosaur1, dinosaur2, dinosaur3, dinosaur4;

  beforeEach(function(){
    park1 = new Park("Carnivore Enclosure")
    park2 = new Park("Herbivore Enclosure")
    dinosaur1 = new Dinosaur("Velociraptor", "Carnivore", 2);
    dinosaur2 = new Dinosaur("T-Rex", "Carnivore", 1);
    dinosaur3 = new Dinosaur("Stegosaurus", "Herbivore", 3);
    dinosaur4 = new Dinosaur("Apatosaurus", "Herbivore", 4);
  })

  it('has enclosure name when created', function(){
    assert.strictEqual(park1.name, "Carnivore Enclosure");
  })


})
