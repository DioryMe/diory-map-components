/* eslint-env jest */
import React from 'react'
import { enhanceWithDioryMapWrapper } from './enhanceWithDioryMapWrapper'

describe('enhanceWithDioryMapWrapper', () => {
  let getEnhancedComponent
  let props
  beforeEach(() => {
    props = {}
    const MockDioryComponent = () => <div />
    getEnhancedComponent = () => enhanceWithDioryMapWrapper(<MockDioryComponent { ...props } />)
  })

  it('enhances component with lat and lng from geo data as numbers', () => {
    props.data = { geo: {
      latitude: 1234,
      longitude: 4321
    } }
    expect(getEnhancedComponent().props).toMatchObject({ lng: 4321, lat: 1234 })
  })

  it('enhances component with lat and lng from geo data as strings', () => {
    props.data = { geo: {
      latitude: '1234',
      longitude: '4321'
    } }
    expect(getEnhancedComponent().props).toMatchObject({ lng: 4321, lat: 1234 })
  })
})

