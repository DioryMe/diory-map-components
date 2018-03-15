import React, { cloneElement } from 'react'
import { DioryMapWrapper } from '../.'

export const enhanceWithDioryMapWrapper = Diory => hasGeoData(Diory) && cloneElement(<DioryMapWrapper />, {
  key: Diory.key,
  lat: formatToNumber(Diory.props.data.geo.latitude),
  lng: formatToNumber(Diory.props.data.geo.longitude),
  Diory
})

const hasGeoData = Component => Component && Component.props && Component.props.data && Component.props.data.geo
const formatToNumber = stringOrNumber => parseFloat(stringOrNumber)
