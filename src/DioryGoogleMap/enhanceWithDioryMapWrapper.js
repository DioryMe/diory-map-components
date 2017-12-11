import React, { cloneElement } from 'react'
import { DioryMapWrapper } from '../.'

export const enhanceWithDioryMapWrapper = Diory => hasGeoData(Diory) && cloneElement(<DioryMapWrapper />, {
  key: Diory.key,
  lat: Diory.props.data.geo.latitude,
  lng: Diory.props.data.geo.longitude,
  Diory
})

const hasGeoData = Component => Component && Component.props && Component.props.data && Component.props.data.geo
