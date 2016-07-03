'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: digits', function () {
  describe('Should be valid', function () {
    it('When `prop` is "999"', function () {
      (0, _assert2['default'])((0, _basicValidations.digits)(true, '999') === false);
    });
    it('When `prop` is 999', function () {
      (0, _assert2['default'])((0, _basicValidations.digits)(true, 999) === false);
    });
  });
  describe('Should be invalid', function () {
    it('When `prop` is "blah"', function () {
      (0, _assert2['default'])((0, _basicValidations.digits)({}, 'blah') === true);
    });
    it('When `prop` is "blah77"', function () {
      (0, _assert2['default'])((0, _basicValidations.digits)({}, 'blah77') === true);
    });
    it('When `prop` is "4,000"', function () {
      (0, _assert2['default'])((0, _basicValidations.digits)({}, '4,000') === true);
    });
    it('When `prop` is "77.7"', function () {
      (0, _assert2['default'])((0, _basicValidations.digits)({}, '77.7') === true);
    });
    it('When `prop` is 77.7', function () {
      (0, _assert2['default'])((0, _basicValidations.digits)({}, 77.7) === true);
    });
  });
});