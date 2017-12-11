'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _dioryReactComponents = require('diory-react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DioryMapPin = function DioryMapPin(_ref) {
  var _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state,
      children = _ref.children,
      diory = _objectWithoutProperties(_ref, ['state', 'children']);

  return _react2.default.createElement(
    'div',
    { style: state.hover ? defaultStyles.setOnTop : {} },
    _react2.default.createElement('div', { style: defaultStyles.pin }),
    _react2.default.createElement(
      'div',
      { style: defaultStyles.container },
      _react2.default.createElement(
        'div',
        { style: state.hover ? defaultStyles.rectangle : defaultStyles.circle },
        children || _react2.default.createElement(_dioryReactComponents.Diory, (0, _deepmerge2.default)({ styles: { diory: defaultStyles.diory } }, diory))
      )
    )
  );
};

var defaultStyles = {
  setOnTop: {
    position: 'relative',
    zIndex: 10000
  },
  pin: {
    display: 'inline-block',
    position: 'absolute',
    bottom: 0,
    width: '10px',
    height: '10px',
    border: '6px solid rgba(0,0,0,0.5)',
    borderRadius: '50% 50% 50% 0',
    background: 'transparent',
    transform: 'translateX(-50%) rotate(-45deg)',
    transformOrigin: '0 0',
    boxShadow: '-1px 1px 2px rgba(0,0,0,.2)'
  },
  container: {
    display: 'inline-block',
    position: 'absolute',
    zIndex: 1,
    bottom: '13px',
    left: '4px',
    background: 'transparent',
    transform: 'translateX(-50%)',
    transition: 'all 0.5s'
  },
  circle: {
    position: 'relative',
    width: '100px',
    height: '100px',
    transform: 'scale(0.25)',
    transformOrigin: 'bottom',
    borderRadius: '50%',
    overflow: 'hidden',
    transition: 'all 0.5s'
  },
  rectangle: {
    position: 'relative',
    width: '200px',
    height: '100px',
    transform: 'scale(1)',
    transformOrigin: 'bottom',
    borderRadius: 0,
    overflow: 'hidden',
    transition: 'all 0.5s'
  },
  diory: {
    height: '100%',
    width: '100%'
  }
};

DioryMapPin.propTypes = {
  state: _propTypes2.default.object,
  styles: _propTypes2.default.object,
  children: _propTypes2.default.node
};

exports.default = DioryMapPin;