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

  it('enclosure is empty at start', function(){
    assert.strictEqual(park1.enclosure.length, 0);
  })

  it('has enclosure name when created', function(){
    assert.strictEqual(park1.name, "Carnivore Enclosure");
  })

  it('can add dinosaur to enclosure', function(){
    park1.addDino(dinosaur1);
    assert.strictEqual(park1.enclosure.length, 1);
  })

  it('can remove dinosaur from enclosure', function(){
    park1.addDino(dinosaur1);
    assert.strictEqual(park1.enclosure.length, 1);
    park1.removeDino(dinosaur1);
    assert.strictEqual(park1.enclosure.length, 0);
  })

  it('remove dinosaur of same type', function(){
    park1.addDino(dinosaur1);
    park1.addDino(dinosaur2);
    park1.addDino(dinosaur3);
    assert.strictEqual(park1.enclosure.length, 3);
    park1.removeType("Carnivore");
    assert.strictEqual(park1.enclosure.length, 1);
  })

  it('remove dinosaurs with an offspring count of more than 2',function(){
    park1.addDino(dinosaur1);
    park1.addDino(dinosaur2);
    park1.addDino(dinosaur3);
    assert.strictEqual(park1.enclosure.length, 3);
    assert.strictEqual(park1.removeOffspring(2).length, 1);
  })



})
