'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _basicValidations = require('../basic-validations');

// Sample valid CC numbers, split up into 4 separate pieces
// Source: http://www.getcreditcardnumbers.com/
var cards = [{ type: 'Amex', pieces: [3483, 2314, 1931, 128] }, { type: 'Diners', pieces: [3017, 5465, 5838, 90] }, { type: 'Discover', pieces: [6011, 6855, 1062, 3624] }, { type: 'JCB', pieces: [3528, 7139, 4254, 4326] }, { type: 'JCB 15', pieces: [2100, 1991, 2694, 367] }, { type: 'MasterCard', pieces: [5519, 4093, 1282, 6387] }, { type: 'Visa 13', pieces: [4225, 4269, 4946, 6] }, { type: 'Visa 16', pieces: [4532, 6628, 9297, 4839] }];

var generate = function generate(pieces) {
  var separator = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  return pieces.join(separator);
};

var generateValid = function generateValid(pieces, separator) {
  return generate(pieces, separator);
};

var generateInvalid = function generateInvalid(pieces, separator) {
  // only one digit in the card number needs to be altered in order for it to be invalid
  var invalidCardNumber = [pieces[0], pieces[1], pieces[2], pieces[3] + 1];

  return generate(invalidCardNumber, separator);
};

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: creditcard', function () {
  describe('Should be valid', function () {
    describe('With no separator', function () {
      it('When `prop` is valid card number', function () {
        cards.forEach(function (card) {
          console.log('Card type:', card.type);
          (0, _assert2['default'])((0, _basicValidations.creditcard)(true, generateValid(card.pieces)) === false);
        });
      });
    });
    describe('With space separator', function () {
      it('When `prop` is valid card number', function () {
        cards.forEach(function (card) {
          console.log('Card type:', card.type);
          (0, _assert2['default'])((0, _basicValidations.creditcard)(true, generateValid(card.pieces, ' ')) === false);
        });
      });
    });
    describe('With "-" separator', function () {
      it('When `prop` is valid card number', function () {
        cards.forEach(function (card) {
          console.log('Card type:', card.type);
          (0, _assert2['default'])((0, _basicValidations.creditcard)(true, generateValid(card.pieces, '-')) === false);
        });
      });
    });
  });
  describe('Should be invalid', function () {
    describe('With no separator', function () {
      it('When `prop` is valid card number', function () {
        cards.forEach(function (card) {
          console.log('Card type:', card.type);
          (0, _assert2['default'])((0, _basicValidations.creditcard)(true, generateInvalid(card.pieces)) === true);
        });
      });
    });
    describe('With space separator', function () {
      it('When `prop` is valid card number', function () {
        cards.forEach(function (card) {
          console.log('Card type:', card.type);
          (0, _assert2['default'])((0, _basicValidations.creditcard)(true, generateInvalid(card.pieces, ' ')) === true);
        });
      });
    });
    describe('With "-" separator', function () {
      it('When `prop` is valid card number', function () {
        cards.forEach(function (card) {
          console.log('Card type:', card.type);
          (0, _assert2['default'])((0, _basicValidations.creditcard)(true, generateInvalid(card.pieces, '-')) === true);
        });
      });
    });
    describe('With non-number values', function () {
      it('When `prop` contains letters', function () {
        (0, _assert2['default'])((0, _basicValidations.creditcard)(true, 'blah99') === true);
      });
    });
    describe('With number too long', function () {
      it('When `prop` contains number with length 1 longer than valid number', function () {
        cards.forEach(function (card) {
          console.log('Card type:', card.type);
          (0, _assert2['default'])((0, _basicValidations.creditcard)(true, generateValid(card.pieces) + '9') === true);
        });
      });
    });
  });
});