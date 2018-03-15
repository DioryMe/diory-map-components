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
    }}
    expect(getEnhancedComponent().props).toMatchObject({ lng: 4321, lat: 1234 })
  })

  it('enhances component with lat and lng from geo data as strings', () => {
    props.data = { geo: {
      latitude: '1234',
      longitude: '4321'
    }}
    expect(getEnhancedComponent().props).toMatchObject({ lng: 4321, lat: 1234 })
  })

  describe('given geo data does not exist', () => {
    it('does to return component', () => {
      props.data = {}
      expect(getEnhancedComponent()).toBeFalsy()
    })
  })

  describe('given geo data is empty object', () => {
    it('does to return component', () => {
      props.data = { geo: {} }
      expect(getEnhancedComponent()).toBeFalsy()
    })
  })

  describe('given geo data is null', () => {
    it('does to return component', () => {
      props.data = { geo: {
        longitude: null,
        latitude: null
      }}
      expect(getEnhancedComponent()).toBeFalsy()
    })
  })

  describe('given geo data is undefined', () => {
    it('does to return component', () => {
      props.data = { geo: {
        longitude: undefined,
        latitude: undefined
      }}
      expect(getEnhancedComponent()).toBeFalsy()
    })
  })

  describe('given one geo data is null', () => {
    it('does to return component', () => {
      props.data = { geo: {
        longitude: 123,
        latitude: null
      }}
      expect(getEnhancedComponent()).toBeFalsy()
    })
  })
})

