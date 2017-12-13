import React from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { DioryGoogleMap, DioryMapPin } from '../.'

const MapDiory = diory => {
  const { data: { geo } } = diory
  return (
    <DioryGoogleMap { ...withStyle(diory, 'diory') }>
      <DioryMapPin data={{ geo }} />
    </DioryGoogleMap>
  )
}

const withStyle = (diory, key) => deepmerge({ style: defaultStyles[key] || {} }, diory || {})

const defaultStyles = {
  diory: {
    width: '20em',
    height: '10em'
  }
}

MapDiory.propTypes = {
  data: PropTypes.shape({
    apiKey: PropTypes.string.isRequired,
    geo: PropTypes.object.isRequired
  }).isRequired
}

export default MapDiory
