'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: email', function () {
  it('should be invalid when `prop` is "x"', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x', true) === true);
  });
  it('should be invalid when `prop` is "x@"', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x@', true) === true);
  });
  it('should be invalid when `prop` is "@x"', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, '@x', true) === true);
  });
  it('should be invalid when `prop` is "x@x"', function () {
    // Note: we are assuming that the domain name will contain at least one '.'.
    // So `localhost`, for example, will not be considered a valid domain name.
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x@x', true) === true);
  });
  it('should be invalid when `prop` is "x@x."', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x@x.', true) === true);
  });
  it('should be valid when `prop` is "x@x.x"', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x@x.x', true) === false);
  });
  it('should be valid when `prop` is "x@x.xx"', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x@x.xx', true) === false);
  });
  it('should be valid when `prop` is "x@xx.xx"', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x@xx.xx', true) === false);
  });
  it('should be valid when `prop` is "x@192.16.0.10"', function () {
    (0, _assert2['default'])((0, _basicValidations.email)({}, 'x@192.16.0.10', true) === false);
  });
});