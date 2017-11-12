import React, { cloneElement } from 'react'
import DioryMapWrapper from '../DioryMapWrapper/DioryMapWrapper'

export const enhanceWithDioryMapWrapper = Diory => cloneElement(<DioryMapWrapper />, {
  key: Diory.key,
  lat: Diory.props.data.geo.latitude,
  lng: Diory.props.data.geo.longitude,
  Diory
})

