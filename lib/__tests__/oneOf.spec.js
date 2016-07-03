'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: oneOf', function () {
  it('should be valid when `value` (string) is listed in `prop`', function () {
    (0, _assert2['default'])((0, _basicValidations.oneOf)({}, 'bb', ['aa', 'bb', 'cc']) === false);
  });
  it('should be invalid when `value` (string) is not listed in `prop`', function () {
    (0, _assert2['default'])((0, _basicValidations.oneOf)({}, 'zz', ['aa', 'bb', 'cc']) === true);
  });
  it('should be valid when `value` (number) is listed in `prop`', function () {
    (0, _assert2['default'])((0, _basicValidations.oneOf)({}, 13, [11, 12, 13]) === false);
  });
  it('should be invalid when `value` (number) is not in `prop`', function () {
    (0, _assert2['default'])((0, _basicValidations.oneOf)({}, 99, [11, 12, 13]) === true);
  });
  it('should throw TypeError when `prop` is boolean', function () {
    _assert2['default'].throws(function () {
      return (0, _basicValidations.oneOf)({}, 'z', true);
    }, TypeError);
  });
  it('should throw TypeError when `prop` is object', function () {
    _assert2['default'].throws(function () {
      return (0, _basicValidations.oneOf)({}, 'z', {});
    }, TypeError);
  });
  it('should throw TypeError when `prop` is number', function () {
    _assert2['default'].throws(function () {
      return (0, _basicValidations.oneOf)({}, 'z', 99);
    }, TypeError);
  });
});