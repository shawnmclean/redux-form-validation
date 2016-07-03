'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FormMessages = (function (_Component) {
  _inherits(FormMessages, _Component);

  function FormMessages() {
    _classCallCheck(this, FormMessages);

    _get(Object.getPrototypeOf(FormMessages.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FormMessages, [{
    key: 'renderChildren',
    value: function renderChildren(children, field, errorCount) {
      if (field && field.touched && field.error) {
        var errorList = _react2['default'].Children.toArray(children).filter(function (child) {
          return child.props.when && field.error[child.props.when];
        });

        var displayErrorCount = parseInt(errorCount, 10);
        if (displayErrorCount < 0) {
          return errorList;
        }
        return errorList.slice(0, displayErrorCount);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var field = _props.field;
      var errorCount = _props.errorCount;
      var tagName = _props.tagName;

      var rest = _objectWithoutProperties(_props, ['children', 'field', 'errorCount', 'tagName']);

      return _react2['default'].createElement(
        this.props.tagName,
        rest,
        this.renderChildren(children, field, errorCount)
      );
    }
  }]);

  return FormMessages;
})(_react.Component);

exports['default'] = FormMessages;
;

FormMessages.propTypes = {
  field: _react.PropTypes.object.isRequired,
  tagName: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
  errorCount: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};

FormMessages.defaultProps = {
  errorCount: -1,
  tagName: 'div'
};
module.exports = exports['default'];