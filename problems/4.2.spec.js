var expect = require('chai').expect;
var hasRoute = require('./4.2');

describe('4.2', function() {

  it('should find a path if it exists', function() {
    var a = {
      adj: []
    };
    var b = {
      adj: [{
        adj: [{
          adj: [{
            adj: []
          }, {
            adj: [a]
          }]
        }, {
          adj: []
        }]
      }]
    };

    expect(hasRoute(a, b)).to.be.true;
    expect(hasRoute(b, a)).to.be.true;
  });

  it('should not find a path if it doesnt exist', function() {
    var a = {
      adj: []
    };
    var b = {
      adj: [{
        adj: [{
          adj: [{
            adj: []
          }, {
            adj: []
          }]
        }, {
          adj: []
        }]
      }]
    };

    expect(hasRoute(a, b)).to.be.false;
    expect(hasRoute(b, a)).to.be.false;
  });

});
