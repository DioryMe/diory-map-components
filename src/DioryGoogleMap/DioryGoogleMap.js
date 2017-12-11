import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { DioryMapPin } from '../.'
import { enhanceWithDioryMapWrapper } from './enhanceWithDioryMapWrapper'

const DioryGoogleMap = ({
  data: {
    apiKey,
    geo: { latitude, longitude, zoom }
  },
  styles = {},
  diorys,
  actions: {
    onDioryClick,
    onDioryHoverBegin,
    onDioryHoverEnd,
    onMapClick,
    onChange
  },
  children
}) => (!apiKey ? null :
  <div style={ styles.diory || defaultStyles.diory }>
    <GoogleMap
      bootstrapURLKeys={{ key: apiKey }}
      center={{ lat: latitude, lng: longitude }}
      zoom={ zoom }
      onClick={ getCoordinates(onMapClick) }
      onChildClick={ getKeyAndDiory(onDioryClick) }
      onChildMouseEnter={ getKeyAndDiory(onDioryHoverBegin) }
      onChildMouseLeave={ getKeyAndDiory(onDioryHoverEnd) }
      onChange={ getZoom(onChange) }
    >
      {
        children ?
        toArray(children).map(enhanceWithDioryMapWrapper) :
        createMapPins(diorys).map(enhanceWithDioryMapWrapper)
      }
    </GoogleMap>
  </div>
)

const getCoordinates = action => ({ lng: longitude, lat: latitude }) => {
  action && action({ diory: { data: { geo: { longitude, latitude } } } })
}
const getZoom = action => ({ zoom }) => {
  action && action({ diory: { data: { geo: { zoom } } } })
}
const getKeyAndDiory = action => (index, { Diory: { key, props: { actions, state, ...diory } } }) => {
  action && action({ key, diory })
}

const toArray = prop => Array.isArray(prop) ? prop : [prop]

const createMapPins = (diorys = {}) => Object.entries(diorys).map(([key, diory]) => <DioryMapPin key={ key } { ...diory } />)


const defaultStyles = {
  diory: { position: 'fixed', height: '100%', width: '100%' }
}

DioryGoogleMap.defaultProps = {
  data: {
    geo: {
      latitude: 61.6316413,
      longitude: -12.0290996,
      zoom: 3
    }
  },
  actions: {
    onDioryClick: () => {},
    onDioryHoverBegin: () => {},
    onDioryHoverEnd: () => {}
  }
}

DioryGoogleMap.propTypes = {
  data: PropTypes.shape({
    apiKey: PropTypes.string,
    geo: PropTypes.object
  }),
  styles: PropTypes.object,
  diorys: PropTypes.object,
  actions: PropTypes.object,
  children: PropTypes.node
}

export default DioryGoogleMap
