import React from 'react'
import PropTypes from 'prop-types'
import { Diory } from 'diory-react-components'

const DioryMapPin = ({ state = {}, children, styles = {}, ...diory }) => (
  <div style={ state.hover ? defaultStyles.top : {} }>
    <div style={ defaultStyles.pin } />
    <div style={ defaultStyles.dioryContainer }>
      { children || <Diory { ...diory } styles={ getStyles(state, styles) } /> }
    </div>
  </div>
)

const getStyles = ({ hover }, styles) => !hover ?
  ({
    ...styles,
    diory: {
      ...styles.diory,
      ...defaultStyles.circleDiory
    },
    text: {
      fontSize: 0,
      transition: 'all 0.5s'
    }
  }) :
  ({
    ...styles,
    diory: {
      ...styles.diory,
      ...defaultStyles.rectangleDiory
    },
    text: {
      transition: 'all 0.5s',
      ...styles.text
    }
  })

const defaultStyles = {
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
  }
}

DioryMapPin.propTypes = {
  state: PropTypes.object,
  styles: PropTypes.object,
  children: PropTypes.node
}

export default DioryMapPin
