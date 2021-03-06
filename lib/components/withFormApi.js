'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withFormApi;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormApi = require('./FormApi');

var _FormApi2 = _interopRequireDefault(_FormApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

function withFormApi(Comp, defaults) {
  return function ConnectedFormApi(props) {
    return _react2.default.createElement(_FormApi2.default, _extends({ component: Comp }, defaults, props));
  };
}
module.exports = exports['default'];