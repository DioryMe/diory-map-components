/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryMapPicker from './DioryMapPicker'

describe('<DioryMapPicker/>', () => {
  let getComponent
  let diory

  beforeEach(() => {
    diory = { data: { apiKey: 'some-apiKey' } }
    getComponent = () => shallow(<DioryMapPicker { ...diory } />)
  })

  it('renders with required props', () => {
    expect(getComponent().exists()).toBeTruthy()
  })

  it('renders DioryGoogleMap with diory', () => {
    diory.some = 'prop'
    expect(getComponent().find('DioryGoogleMap').props().some).toEqual('prop')
  })

  it('renders DioryMapPin with geo data', () => {
    const geo = { some: 'geo' }
    diory.data.geo = geo
    expect(getComponent().find('DioryMapPin').props().data).toEqual({ geo })
  })

  describe('when map is clicked', () => {
    let component
    beforeEach(() => {
      diory.onClick = jest.fn()
      diory.onChange = jest.fn()
      component = getComponent()
      component.props().actions.onMapClick({
        diory: { data: { geo: { longitude: 'some-longitude', latitude: 'some-latitude' } } }
      })
    })

    it('calls onChange with diory data geo', () => {
      expect(diory.onChange).toBeCalledWith({
        diory: { data: { geo: { longitude: 'some-longitude', latitude: 'some-latitude' } } }
      })
    })
  })

  describe('when map is changed by zooming or resize', () => {
    let component
    beforeEach(() => {
      diory.onChange = jest.fn()
      component = getComponent()
      component.props().actions.onChange({ diory: { data: { geo: { zoom: 'some-zoom' } } } })
    })

    it('calls onChange with diory data geo', () => {
      expect(diory.onChange).toBeCalledWith({
        diory: { data: { geo: { zoom: 'some-zoom' } } }
      })
    })
  })

  describe('when diory on map is clicked', () => {
    let component
    beforeEach(() => {
      diory.onClick = jest.fn()
      diory.data.geo = { some: 'geo' }
      component = getComponent()
      component.props().actions.onDioryClick()
    })

    it('calls onClick with diory data geo', () => {
      expect(diory.onClick).toBeCalledWith({
        diory: { data: { geo: { some: 'geo' } } }
      })
    })
  })
})
