import React from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import GoogleMap from 'google-map-react'
import { DioryMapPin } from '../.'
import { enhanceWithDioryMapWrapper } from '../DioryMapWrapper/enhanceWithDioryMapWrapper'

const DioryGoogleMap = ({
  data: {
    apiKey,
    geo: { latitude, longitude, zoom }
  },
  style = {},
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
  <div style={ deepmerge(defaultStyles.diory, style) }>
    <GoogleMap
      bootstrapURLKeys={{ key: apiKey }}
      center={{ lat: parseLat(latitude), lng: parseLng(longitude) }}
      zoom={ parseZoom(zoom) }
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

const parseLat = latitude => parseFloat(latitude) || 61.6316413
const parseLng = longitude => parseFloat(longitude) || -12.0290996
const parseZoom = zoom => parseFloat(zoom) || 3

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
  style: PropTypes.object,
  diorys: PropTypes.object,
  actions: PropTypes.object,
  children: PropTypes.node
}

export default DioryGoogleMap
