var expect = require('expect.js');

var human = require('../');

describe('intervalToHuman', function() {
  it('supports seconds', function() {
    expect(human(1000)).to.be('1 second');
  });
  it('supports minutes', function() {
    expect(human(65000)).to.be('1 minute');
  });
  it('supports hours', function() {
    expect(human(60000 * 72)).to.be('1 hour');
  });
  it('supports days', function() {
    expect(human(60000 * 60 * 24)).to.be('1 day');
  });

  it('supports weeks', function() {
    expect(human(60000 * 60 * 24 * 8)).to.be('1 week');
  });

  it('supports months', function() {
    expect(human(60000 * 60 * 24 * 7 * 4)).to.be('1 month');
  });

  it('pluralizes', function() {
    expect(human(2000)).to.be('2 seconds');
  });
});
