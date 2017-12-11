'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhanceWithDioryMapWrapper = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhanceWithDioryMapWrapper = exports.enhanceWithDioryMapWrapper = function enhanceWithDioryMapWrapper(Diory) {
  return hasGeoData(Diory) && (0, _react.cloneElement)(_react2.default.createElement(_.DioryMapWrapper, null), {
    key: Diory.key,
    lat: Diory.props.data.geo.latitude,
    lng: Diory.props.data.geo.longitude,
    Diory: Diory
  });
};

var hasGeoData = function hasGeoData(Component) {
  return Component && Component.props && Component.props.data && Component.props.data.geo;
};