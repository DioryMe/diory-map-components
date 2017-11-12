/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryGoogleMap from './DioryGoogleMap'

describe('<DioryGoogleMap/>', () => {
  let getComponent
  let diory = {}

  describe('given Google apiKey exists', () => {
    beforeEach(() => {
      diory.data = { apiKey: 'some-apiKey', geo: {} }
      getComponent = () => shallow(<DioryGoogleMap { ...diory } />)
    })

    it('renders with required props', () => {
      expect(getComponent().exists()).toBeTrue
    })

    describe('a <GoogleMap/> within', () => {
      beforeEach(() => {
        getComponent = () => shallow(<DioryGoogleMap { ...diory } />).find('GoogleMap')
      })

      it('renders GoogleMap with the apiKey from diory data', () => {
        diory.data.apiKey = 'some-apiKey'
        expect(getComponent().prop('bootstrapURLKeys')).toEqual({ key: 'some-apiKey' })
      })

      it('renders GoogleMap with a lng and lat from diory data geo', () => {
        const longitude = 1234
        const latitude = 4321
        diory.data = { ...diory.data, geo: { longitude, latitude } }
        expect(getComponent().prop('center')).toEqual({ lng: longitude, lat: latitude })
      })

      it('renders GoogleMap with a zoom from diory data geo', () => {
        const zoom = 9999
        diory.data = { ...diory.data, geo: { zoom } }
        expect(getComponent().prop('zoom')).toEqual(zoom)
      })

      describe('GoogleMap actions', () => {
        let component
        let actions
        beforeEach(() => {
          actions = {}
          getComponent = () => shallow(<DioryGoogleMap { ...diory } actions={ actions } />)
            .find('GoogleMap')
        })

        describe('when a map diory is clicked', () => {
          const diory = { some: 'diory' }
          const key = 'some-key'
          beforeEach(() => {
            actions.onDioryClick = jest.fn()
            component = getComponent()
            component.prop('onChildClick')(1, { Diory: { key, props: diory } })
          })

          it('calls onDioryClick action', () => {
            expect(actions.onDioryClick).toBeCalledWith({ key, diory })
          })
        })
      })
    })
  })
})
