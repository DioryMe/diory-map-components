/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import MapDiory from './MapDiory'

describe('<MapDiory/>', () => {
  let getComponent
  let diory

  beforeEach(() => {
    diory = {
      data: {
        apiKey: '',
        geo: {}
      }
    }
    getComponent = () => shallow(<MapDiory { ...diory } />)
  })

  it('renders with required props', () => {
    expect(getComponent().exists()).toBeTruthy()
  })

  it('renders DioryGoogleMap with diory data apiKey', () => {
    diory.data.apiKey = 'some-apiKey'
    expect(getComponent().find('DioryGoogleMap').props().data.apiKey).toEqual('some-apiKey')
  })

  it('renders DioryGoogleMap with diory data geo', () => {
    diory.data.geo = { some: 'geo' }
    expect(getComponent().find('DioryGoogleMap').props().data.geo).toEqual({ some: 'geo' })
  })

  it('renders DioryMapPin with diory data geo', () => {
    diory.data.geo = { some: 'geo' }
    expect(getComponent().find('DioryGoogleMap').props().data.geo).toEqual({ some: 'geo' })
  })
})
