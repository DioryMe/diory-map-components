import React, { Component } from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { DioryGoogleMap, DioryMapPin } from '../.'

class DioryMapPicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      geo: getGeoObject(props)
    }
  }

  render () {
    const { geo } = this.state
    const { ...diory } = this.props

    return (
      <DioryGoogleMap
        { ...diory }
        actions={{
          onDioryClick: this.callOnClick,
          onMapClick: this.setCoordinatesAndCallOnChange,
          onChange: this.setZoomAndCallOnChange
        }}
      >
        <DioryMapPin
          { ...pinDiory }
          data={{ geo }}
        />
      </DioryGoogleMap>
    )
  }

  callOnClick = () => this.props.onClick(({ diory: { data: { geo: this.state.geo } } }))
  setCoordinatesAndCallOnChange = ({ diory: { data: { geo: { longitude, latitude } } } }) => this.setGeoAndCallOnChange({ longitude, latitude })
  setZoomAndCallOnChange = ({ diory: { data: { geo: { zoom } } } }) => this.setGeoAndCallOnChange({ zoom })
  setGeoAndCallOnChange = geo => {
    this.setState(setGeo(geo))
    this.props.onChange({ diory: { data: { geo: deepmerge(this.state.geo, geo) } } })
  }
}

const getGeoObject = diory => diory && diory.data && diory.data.geo || {}
const setGeo = newGeo => ({ geo }) => ({ geo: { ...geo, ...newGeo } })

const pinDiory = {
  text: '+',
  style: {
    backgroundColor: 'green',
    height: '100%',
    width: '100%',
    text: {
      color: 'white',
      fontSize: '40px',
      fontWeight: 'bold',
      textAlign: 'center',
      transform: 'translateY(-50%)',
      top: '50%'
    }
  },
  state: { hover: false }
}

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
