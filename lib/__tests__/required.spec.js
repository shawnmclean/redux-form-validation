'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

describe('Validator: required', function () {
  it('should be valid when `value` is empty and `prop` is false', function () {
    (0, _assert2['default'])((0, _basicValidations.required)({}, '', false) === false);
  });
  it('should be valid when `value` is truthy and `prop` is false', function () {
    (0, _assert2['default'])((0, _basicValidations.required)({}, 'true', false) === false);
  });
  it('should be invalid when `value` is empty and `prop` is true', function () {
    (0, _assert2['default'])((0, _basicValidations.required)({}, '', true) === true);
  });
  it('should be valid when `value` is truthy and `prop` is true', function () {
    (0, _assert2['default'])((0, _basicValidations.required)({}, 'true', true) === false);
  });
});