var assert = require('assert');
// var add = require('../add')
import {add} from '../add.js'

describe('add function', function() {
    it('1+2 should be 3', function() {
      assert.equal(add(1,2), 3);
    });
});