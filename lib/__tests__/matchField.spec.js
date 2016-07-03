'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: matchField', function () {
  it('should be valid when `value` (string) equals value of the given fieldName', function () {
    (0, _assert2['default'])((0, _basicValidations.matchField)({}, 'matcher', 'otherField', false, { otherField: 'matcher' }) === false);
  });

  it('should not be valid when `value` (string) not equals value of the given fieldName', function () {
    (0, _assert2['default'])((0, _basicValidations.matchField)({}, 'matcher', 'otherField', false, { otherField: 'non-matcher' }) === true);
  });
});