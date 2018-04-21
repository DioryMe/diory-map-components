import React, { Component } from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { DioryGoogleMap, DioryMapPin } from '../.'

const DioryMapPicker = ({ onChange, onClick, ...diory }) => {
  const pinDiory = getPin(diory)
  return (
    <DioryGoogleMap
      { ...diory }
      actions={{
        onDioryClick: () => onClick({ diory: pinDiory }),
        onMapClick: ({ diory }) => onChange({ diory: deepmerge(pinDiory, diory) }),
        onChange: ({ diory }) => onChange({ diory: deepmerge(pinDiory, diory) })
      }}
    >
      <DioryMapPin { ...pinDiory }/>
    </DioryGoogleMap>
  )
}

const getPin = ({ diorys, data: { geo } }) => diorys && diorys.pin ? deepmerge({ data: { geo } }, diorys.pin) : ({ data: { geo } })

DioryMapPicker.defaultProps = {
  onClick: () => {},
  onChange: () => {}
}

DioryMapPicker.propTypes = {
  data: PropTypes.shape({
    apiKey: PropTypes.string.isRequired,
    geo: PropTypes.object
  }),
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default DioryMapPicker
