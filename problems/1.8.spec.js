var expect = require('chai').expect;
var isRotation = require('./1.8');

describe('1.8', function() {
  it('should check rotation', function() {
    expect(isRotation('waterbottle', 'erbottlewat')).to.be.true;
    expect(isRotation('waterbottle', 'erobttlewat')).to.be.false;
    expect(isRotation('waterbottle', 'rbottlewat')).to.be.false;
    expect(isRotation('waterbottle', 'erbottlewa')).to.be.false;
    expect(isRotation('waterbottle', 'erbottewat')).to.be.false;
    expect(isRotation('w', 'w')).to.be.true;
  });
});
