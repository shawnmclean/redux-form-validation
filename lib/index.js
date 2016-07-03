'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _formMessages = require('./form-messages');

var _formMessages2 = _interopRequireDefault(_formMessages);

var _validationJs = require('./validation.js');

exports['default'] = _formMessages2['default'];
exports.generateValidation = _validationJs.generateValidation;
exports.addValidation = _validationJs.addValidation;
exports.addMultipleValidations = _validationJs.addMultipleValidations;
exports.generateAsyncBlurFields = _validationJs.generateAsyncBlurFields;
exports.generateAsyncValidation = _validationJs.generateAsyncValidation;