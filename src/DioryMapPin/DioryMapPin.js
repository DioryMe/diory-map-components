import React from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { Diory } from 'diory-react-components'

const DioryMapPin = ({ state = {}, children, ...diory }) => (
  <div style={ state.hover ? defaultStyles.setOnTop : {} }>
    <div style={ defaultStyles.pin } />
    <div style={ defaultStyles.container }>
      <div style={ state.hover ? defaultStyles.rectangle : defaultStyles.circle }>
        { children || <Diory { ...deepmerge({ styles: { diory: defaultStyles.diory } }, diory) } /> }
      </div>
    </div>
  </div>
)

const defaultStyles = {
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
}

DioryMapPin.propTypes = {
  state: PropTypes.object,
  styles: PropTypes.object,
  children: PropTypes.node
}

export default DioryMapPin
