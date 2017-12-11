'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DioryMapWrapper = function DioryMapWrapper(_ref) {
  var $hover = _ref.$hover,
      Diory = _ref.Diory;
  return (0, _react.cloneElement)(Diory, { state: _extends({ hover: $hover }, Diory.props.state) });
};

DioryMapWrapper.propTypes = {
  $hover: _propTypes2.default.bool,
  Diory: _propTypes2.default.node
};
exports.default = DioryMapWrapper;