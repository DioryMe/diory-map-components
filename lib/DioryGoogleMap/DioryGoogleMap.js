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

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _DioryMapPin = require('../DioryMapPin');

var _enhanceWithDioryMapWrapper = require('./enhanceWithDioryMapWrapper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyles = {
  diory: { position: 'fixed', height: '100%', width: '100%' }
};

var DioryGoogleMap = function DioryGoogleMap(_ref) {
  var _ref$data = _ref.data,
      apiKey = _ref$data.apiKey,
      _ref$data$geo = _ref$data.geo,
      latitude = _ref$data$geo.latitude,
      longitude = _ref$data$geo.longitude,
      zoom = _ref$data$geo.zoom,
      _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$diorys = _ref.diorys,
      diorys = _ref$diorys === undefined ? {} : _ref$diorys,
      _ref$actions = _ref.actions,
      onDioryClick = _ref$actions.onDioryClick,
      onDioryHoverBegin = _ref$actions.onDioryHoverBegin,
      onDioryHoverEnd = _ref$actions.onDioryHoverEnd,
      onMapClick = _ref$actions.onMapClick,
      children = _ref.children;
  return !apiKey ? null : _react2.default.createElement(
    'div',
    { style: styles.diory || defaultStyles.diory },
    _react2.default.createElement(
      _googleMapReact2.default,
      {
        bootstrapURLKeys: { key: apiKey },
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
        onClick: onMapClick,
        onChildClick: getKeyAndDiory(onDioryClick),
        onChildMouseEnter: getKeyAndDiory(onDioryHoverBegin),
        onChildMouseLeave: getKeyAndDiory(onDioryHoverEnd)
      },
      getDiorys(children, diorys).map(_enhanceWithDioryMapWrapper.enhanceWithDioryMapWrapper)
    )
  );
};

var getKeyAndDiory = function getKeyAndDiory(action) {
  return function (index, _ref2) {
    var _ref2$Diory = _ref2.Diory,
        key = _ref2$Diory.key,
        _ref2$Diory$props = _ref2$Diory.props,
        actions = _ref2$Diory$props.actions,
        state = _ref2$Diory$props.state,
        diory = _objectWithoutProperties(_ref2$Diory$props, ['actions', 'state']);

    action && action({ key: key, diory: diory });
  };
};

var getDiorys = function getDiorys(childrenDiorys, propDiorys) {
  return childrenDiorys || Object.entries(propDiorys).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        diory = _ref4[1];

    return _react2.default.createElement(_DioryMapPin.DioryMapPin, _extends({ key: key }, diory));
  });
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
  styles: _propTypes2.default.object,
  diorys: _propTypes2.default.object,
  actions: _propTypes2.default.object,
  children: _propTypes2.default.node
};

exports.default = DioryGoogleMap;