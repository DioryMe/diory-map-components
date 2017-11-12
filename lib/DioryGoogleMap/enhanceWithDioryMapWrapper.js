'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhanceWithDioryMapWrapper = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DioryMapWrapper = require('../DioryMapWrapper/DioryMapWrapper');

var _DioryMapWrapper2 = _interopRequireDefault(_DioryMapWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhanceWithDioryMapWrapper = exports.enhanceWithDioryMapWrapper = function enhanceWithDioryMapWrapper(Diory) {
  return (0, _react.cloneElement)(_react2.default.createElement(_DioryMapWrapper2.default, null), {
    key: Diory.key,
    lat: Diory.props.data.geo.latitude,
    lng: Diory.props.data.geo.longitude,
    Diory: Diory
  });
};