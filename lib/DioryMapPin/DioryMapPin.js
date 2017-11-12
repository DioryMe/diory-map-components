'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dioryReactComponents = require('diory-react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DioryMapPin = function DioryMapPin(_ref) {
  var _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state,
      children = _ref.children,
      _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      diory = _objectWithoutProperties(_ref, ['state', 'children', 'styles']);

  return _react2.default.createElement(
    'div',
    { style: state.hover ? defaultStyles.top : {} },
    _react2.default.createElement('div', { style: defaultStyles.pin }),
    _react2.default.createElement(
      'div',
      { style: defaultStyles.dioryContainer },
      children || _react2.default.createElement(_dioryReactComponents.Diory, _extends({}, diory, { styles: getStyles(state, styles) }))
    )
  );
};

var getStyles = function getStyles(_ref2, styles) {
  var hover = _ref2.hover;
  return !hover ? _extends({}, styles, {
    diory: defaultStyles.circleDiory,
    text: _extends({}, styles.text, defaultStyles.text, defaultStyles.circleText)
  }) : _extends({}, styles, {
    diory: _extends({}, defaultStyles.rectangleDiory, styles.diory),
    text: _extends({}, styles.text, defaultStyles.text)
  });
};

var defaultStyles = {
  top: {
    position: 'relative',
    zIndex: 10
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
  dioryContainer: {
    display: 'inline-block',
    position: 'absolute',
    zIndex: 1,
    bottom: '13px',
    left: '4px',
    background: 'transparent',
    transform: 'translateX(-50%)',
    transition: 'all 0.5s'
  },
  circleDiory: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    overflow: 'hidden',
    transition: 'all 0.5s'
  },
  rectangleDiory: {
    width: '200px',
    height: '100px',
    borderRadius: 0,
    overflow: 'hidden',
    transition: 'all 0.5s'
  },
  circleText: {
    fontSize: '4px'
  },
  text: {
    transition: 'all 0.5s'
  }
};

DioryMapPin.propTypes = {
  state: _propTypes2.default.object,
  styles: _propTypes2.default.object,
  children: _propTypes2.default.node
};

exports.default = DioryMapPin;