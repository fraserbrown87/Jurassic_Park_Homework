const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Velociraptor", "Carnivore", 2);
  })

  it('has name when created', function(){
    assert.strictEqual(dinosaur.name, "Velociraptor")
  })

  it('has type when created',function(){
    assert.strictEqual(dinosaur.type, "Carnivore");
  })

  it ('has number of offspring', function(){
    assert.strictEqual(dinosaur.offspring, 2);
  })
})
