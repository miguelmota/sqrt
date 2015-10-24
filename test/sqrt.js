var test = require('tape');
var sqrt = require('../sqrt');

test('sqrt', function (t) {
  'use strict';

  t.plan(14);

  t.equal(isNaN(sqrt(NaN)), true);
  t.equal(isNaN(sqrt({})), true);
  t.equal(isNaN(sqrt([])), true);
  t.equal(isNaN(sqrt('foo')), true);
  t.equal(isNaN(sqrt(-5)), true);
  t.equal(sqrt(0), 0);
  t.equal(sqrt(1), 1);
  t.equal(sqrt(4), 2);
  t.equal(sqrt(25), 5);
  t.equal(sqrt(49), 7);
  t.equal(sqrt(961), 31);
  t.equal(sqrt(100000000), 10000);
  t.equal(sqrt(5), 2.23606797749979);
  t.equal(sqrt(Infinity), Infinity);
});
