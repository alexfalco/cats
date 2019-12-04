



// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  
    it('provides, via callback, breed details for the Bombay breed', (done) => {
      breedDetailsFromFile('Bombay', (bombay) => {
        const expectedDesc = "Alex"
       done(); 
      });      
    });


    it('provides, via callback, undefined for a breed that does not exist', (done) => {
      breedDetailsFromFile('Saphire', (desc) => {
        assert.equal(undefined, desc);
        done(); 
      });      
    });
    

  });


