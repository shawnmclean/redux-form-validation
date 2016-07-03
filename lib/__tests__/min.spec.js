'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: min', function () {
  it('should be valid when `value` is undefined and `prop` is 3', function () {
    (0, _assert2['default'])((0, _basicValidations.min)({}, undefined, 3) === false);
  });
  it('should be invalid when `value` is "99" and `prop` is 100', function () {
    (0, _assert2['default'])((0, _basicValidations.min)({}, '99', 100) === true);
  });
  it('should be valid when `value` is "100" and `prop` is 100', function () {
    (0, _assert2['default'])((0, _basicValidations.min)({}, '100', 100) === false);
  });
  it('should be valid when `value` is "101" and `prop` is 100', function () {
    (0, _assert2['default'])((0, _basicValidations.min)({}, '101', 100) === false);
  });
  it('should be invalid when `value` is 99 and `prop` is 100', function () {
    (0, _assert2['default'])((0, _basicValidations.min)({}, 99, 100) === true);
  });
  it('should be valid when `value` is 100 and `prop` is 100', function () {
    (0, _assert2['default'])((0, _basicValidations.min)({}, 100, 100) === false);
  });
  it('should be valid when `value` is 101 and `prop` is 100', function () {
    (0, _assert2['default'])((0, _basicValidations.min)({}, 101, 100) === false);
  });
});