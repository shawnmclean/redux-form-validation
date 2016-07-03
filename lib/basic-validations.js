'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validUrl = require('valid-url');

var _validUrl2 = _interopRequireDefault(_validUrl);

exports['default'] = {
  required: function required(field, value, prop) {
    return prop ? !value : false;
  },

  minLength: function minLength(field, value, prop) {
    return prop && value ? value.length < prop : false;
  },

  maxLength: function maxLength(field, value, prop) {
    return prop && value ? value.length > prop : false;
  },

  email: function email(field, value, prop) {
    return prop && value ? !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value) : false;
  },

  min: function min(field, value, prop) {
    return prop && value ? !isFinite(value) || parseFloat(value) < prop : false;
  },

  max: function max(field, value, prop) {
    return prop && value ? !isFinite(value) || parseFloat(value) > prop : false;
  },

  pattern: function pattern(field, value, prop) {
    return !value ? false : !prop.test(value);
  },

  equalTo: function equalTo(field, value, prop) {
    return !value ? false : prop != value;
  },

  oneOf: function oneOf(field, value, prop) {
    return !value ? false : prop.indexOf(value) == -1;
  },

  url: function url(field, value, prop) {
    return !value ? false : !_validUrl2['default'].isUri(value);
  },

  promise: function promise(field, value, prop, dispatch) {
    if (typeof prop == 'function') {
      return prop(field, value, dispatch);
    }
    throw new Error("FormValidation: type promise must be a function!");
  },
  digits: function digits(field, value) {
    return !field || !/^\d+$/.test(value);
  },
  creditcard: function creditcard(field, value, prop) {
    if (!value) {
      return false;
    }
    // accept only spaces, digits and dashes
    if (/[^0-9 \-]+/.test(value)) {
      return true;
    }
    var nCheck = 0,
        nDigit = 0,
        bEven = false,
        n,
        cDigit;

    value = value.replace(/\D/g, "");

    // Basing min and max length on
    // http://developer.ean.com/general-info/valid-card-types/
    if (value.length < 13 || value.length > 19) {
      return false;
    }

    for (n = value.length - 1; n >= 0; n--) {
      cDigit = value.charAt(n);
      nDigit = parseInt(cDigit, 10);
      if (bEven) {
        if ((nDigit *= 2) > 9) {
          nDigit -= 9;
        }
      }
      nCheck += nDigit;
      bEven = !bEven;
    }

    return nCheck % 10 !== 0;
  },
  matchField: function matchField(field, value, prop, dispatch, allValues) {
    return !value ? false : value != allValues[prop];
  }
};
module.exports = exports['default'];