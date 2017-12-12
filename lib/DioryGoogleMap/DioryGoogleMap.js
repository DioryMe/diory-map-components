'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _ = require('../.');

var _enhanceWithDioryMapWrapper = require('./enhanceWithDioryMapWrapper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DioryGoogleMap = function DioryGoogleMap(_ref) {
  var _ref$data = _ref.data,
      apiKey = _ref$data.apiKey,
      _ref$data$geo = _ref$data.geo,
      latitude = _ref$data$geo.latitude,
      longitude = _ref$data$geo.longitude,
      zoom = _ref$data$geo.zoom,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      diorys = _ref.diorys,
      _ref$actions = _ref.actions,
      onDioryClick = _ref$actions.onDioryClick,
      onDioryHoverBegin = _ref$actions.onDioryHoverBegin,
      onDioryHoverEnd = _ref$actions.onDioryHoverEnd,
      onMapClick = _ref$actions.onMapClick,
      onChange = _ref$actions.onChange,
      children = _ref.children;
  return !apiKey ? null : _react2.default.createElement(
    'div',
    { style: (0, _deepmerge2.default)(defaultStyles.diory, style) },
    _react2.default.createElement(
      _googleMapReact2.default,
      {
        bootstrapURLKeys: { key: apiKey },
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
        onClick: getCoordinates(onMapClick),
        onChildClick: getKeyAndDiory(onDioryClick),
        onChildMouseEnter: getKeyAndDiory(onDioryHoverBegin),
        onChildMouseLeave: getKeyAndDiory(onDioryHoverEnd),
        onChange: getZoom(onChange)
      },
      children ? toArray(children).map(_enhanceWithDioryMapWrapper.enhanceWithDioryMapWrapper) : createMapPins(diorys).map(_enhanceWithDioryMapWrapper.enhanceWithDioryMapWrapper)
    )
  );
};

var getCoordinates = function getCoordinates(action) {
  return function (_ref2) {
    var longitude = _ref2.lng,
        latitude = _ref2.lat;

    action && action({ diory: { data: { geo: { longitude: longitude, latitude: latitude } } } });
  };
};
var getZoom = function getZoom(action) {
  return function (_ref3) {
    var zoom = _ref3.zoom;

    action && action({ diory: { data: { geo: { zoom: zoom } } } });
  };
};
var getKeyAndDiory = function getKeyAndDiory(action) {
  return function (index, _ref4) {
    var _ref4$Diory = _ref4.Diory,
        key = _ref4$Diory.key,
        _ref4$Diory$props = _ref4$Diory.props,
        actions = _ref4$Diory$props.actions,
        state = _ref4$Diory$props.state,
        diory = _objectWithoutProperties(_ref4$Diory$props, ['actions', 'state']);

    action && action({ key: key, diory: diory });
  };
};

var toArray = function toArray(prop) {
  return Array.isArray(prop) ? prop : [prop];
};

var createMapPins = function createMapPins() {
  var diorys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(diorys).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        diory = _ref6[1];

    return _react2.default.createElement(_.DioryMapPin, _extends({ key: key }, diory));
  });
};

var defaultStyles = {
  diory: { position: 'fixed', height: '100%', width: '100%' }
};

DioryGoogleMap.defaultProps = {
  data: {
    geo: {
      latitude: 61.6316413,
      longitude: -12.0290996,
      zoom: 3
    }
  },
  actions: {
    onDioryClick: function onDioryClick() {},
    onDioryHoverBegin: function onDioryHoverBegin() {},
    onDioryHoverEnd: function onDioryHoverEnd() {}
  }
};

DioryGoogleMap.propTypes = {
  data: _propTypes2.default.shape({
    apiKey: _propTypes2.default.string,
    geo: _propTypes2.default.object
  }),
  style: _propTypes2.default.object,
  diorys: _propTypes2.default.object,
  actions: _propTypes2.default.object,
  children: _propTypes2.default.node
};

exports.default = DioryGoogleMap;