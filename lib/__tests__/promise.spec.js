'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: promise', function () {
  describe('Should throw Error', function () {
    it('When `prop` is boolean', function () {
      _assert2['default'].throws(function () {
        return (0, _basicValidations.promise)({}, '', true);
      }, Error);
    });
    it('When `prop` is string', function () {
      _assert2['default'].throws(function () {
        return (0, _basicValidations.promise)({}, '', '');
      }, Error);
    });
    it('When `prop` is object', function () {
      _assert2['default'].throws(function () {
        return (0, _basicValidations.promise)({}, '', {});
      }, Error);
    });
    it('When `prop` is number', function () {
      _assert2['default'].throws(function () {
        return (0, _basicValidations.promise)({}, '', 46);
      }, Error);
    });
  });
  describe('Should return expected result', function () {
    it('When function is provided', function (done) {
      var testField = 1;
      var testValue = 2;
      var dispatchFn = function dispatchFn() {};
      var testProp = function testProp(field, value, dispatch) {
        (0, _assert2['default'])(field === testField);
        (0, _assert2['default'])(value === testValue);
        (0, _assert2['default'])(dispatchFn === dispatch);
        done();
      };

      (0, _basicValidations.promise)(testField, testValue, testProp, dispatchFn);
    });
  });
});