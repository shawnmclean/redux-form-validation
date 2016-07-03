'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.addValidation = addValidation;
exports.addMultipleValidations = addMultipleValidations;
exports.generateAsyncValidation = generateAsyncValidation;
exports.generateAsyncBlurFields = generateAsyncBlurFields;
exports.generateValidation = generateValidation;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _basicValidationsJs = require('./basic-validations.js');

var _basicValidationsJs2 = _interopRequireDefault(_basicValidationsJs);

var _isPromise = require('is-promise');

var _isPromise2 = _interopRequireDefault(_isPromise);

var validationStore = {};

function addValidation(key, fn) {
    validationStore[key] = fn;
}

function addMultipleValidations(obj) {
    Object.keys(obj).forEach(function (key) {
        return addValidation(key, obj[key]);
    });
}

addMultipleValidations(_basicValidationsJs2['default']);

function generateAsyncValidation(validationConfig) {
    return function (values, dispatch) {
        var promiseList = [Promise.resolve()];
        var errors = {};

        function addError(field, validatorName) {
            var message = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

            if (!errors[field]) {
                errors[field] = {};
            }
            errors[field][validatorName] = message;
        }

        Object.keys(validationConfig).map(function (fieldName) {
            var validation = validationConfig[fieldName];
            if (typeof validation === 'object') {
                Object.keys(validation).map(function (validationType) {
                    if (typeof validationStore[validationType] != 'function') {
                        return;
                    }
                    var hasError = validationStore[validationType](fieldName, values[fieldName], validation[validationType], dispatch, values, validation);
                    if ((0, _isPromise2['default'])(hasError)) {
                        promiseList.push(new Promise(function (resolve, reject) {
                            hasError.then(resolve)['catch'](function (msg) {
                                console.log('promise has error', msg);
                                addError(fieldName, validationType, msg);
                                resolve();
                            });
                        }));
                    } else if (hasError) {
                        addError(fieldName, validationType, hasError);
                    }
                });
            }
        });
        return Promise.all(promiseList).then(function () {
            if (Object.keys(errors).length) {
                return Promise.reject(errors);
            }
        });
    };
}

function generateAsyncBlurFields(validationConfig) {
    return Object.keys(validationConfig).filter(function (fieldName) {
        return typeof validationConfig[fieldName] === 'object' && validationConfig[fieldName].validateOnBlur;
    });
}

function generateValidation(validationConfig) {
    return {
        asyncValidate: generateAsyncValidation(validationConfig),
        asyncBlurFields: generateAsyncBlurFields(validationConfig),
        fields: Object.keys(validationConfig)
    };
}