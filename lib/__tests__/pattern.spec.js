'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: pattern', function () {
  it('should be valid when `value` matches `prop` regex', function () {
    (0, _assert2['default'])((0, _basicValidations.pattern)({}, '__matcher__', /.*matcher.*/) === false);
  });
  it('should be invalid when `value` does not match `prop` regex', function () {
    (0, _assert2['default'])((0, _basicValidations.pattern)({}, '__doesNotMatch__', /.*matcher.*/) === true);
  });
  it('should throw TypeError when `prop` is boolean', function () {
    _assert2['default'].throws(function () {
      return (0, _basicValidations.pattern)({}, 'z', true);
    }, TypeError);
  });
  it('should throw TypeError when `prop` is string', function () {
    _assert2['default'].throws(function () {
      return (0, _basicValidations.pattern)({}, 'z', 'a nice string');
    }, TypeError);
  });
  it('should throw TypeError when `prop` is object', function () {
    _assert2['default'].throws(function () {
      return (0, _basicValidations.pattern)({}, 'z', {});
    }, TypeError);
  });
  it('should throw TypeError when `prop` is number', function () {
    _assert2['default'].throws(function () {
      return (0, _basicValidations.pattern)({}, 'z', 99);
    }, TypeError);
  });
});