import React, { cloneElement } from 'react'
import { DioryMapWrapper } from '../.'

export const enhanceWithDioryMapWrapper = Diory => hasGeoData(Diory) && cloneElement(<DioryMapWrapper />, {
  key: Diory.key,
  lat: formatToNumber(Diory.props.data.geo.latitude),
  lng: formatToNumber(Diory.props.data.geo.longitude),
  Diory
})

const hasGeoData = Component => {
  const geo = (((Component || {}).props || {}).data || {}).geo || {}
  return geo.latitude && geo.longitude
}

const formatToNumber = stringOrNumber => parseFloat(stringOrNumber)
