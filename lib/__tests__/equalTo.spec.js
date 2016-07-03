'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: equalTo', function () {
  it('should be valid when `value` (string) equals `prop` (string)', function () {
    (0, _assert2['default'])((0, _basicValidations.equalTo)({}, 'matcher', 'matcher') === false);
  });
  it('should be invalid when `value` (string) does not equal `prop` (string)', function () {
    (0, _assert2['default'])((0, _basicValidations.equalTo)({}, 'non-matcher', 'matcher') === true);
  });
  it('should be valid when `value` (number) equals `prop` (number)', function () {
    (0, _assert2['default'])((0, _basicValidations.equalTo)({}, 77, 77) === false);
  });
  it('should be valid when `value` (number) does not equal `prop` (number)', function () {
    (0, _assert2['default'])((0, _basicValidations.equalTo)({}, 77, 88) === true);
  });
});