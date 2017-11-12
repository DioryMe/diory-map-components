'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var DioryMapWrapper = function DioryMapWrapper(_ref) {
  var $hover = _ref.$hover,
      Diory = _ref.Diory;
  return (0, _react.cloneElement)(Diory, { state: { hover: $hover } });
};

exports.default = DioryMapWrapper;