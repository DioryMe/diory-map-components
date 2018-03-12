/* eslint-env jest */
import React from 'react'
import addGeoFromImage from './addGeoFromImage'

describe('addGeoFromImage', () => {
  it('adds geo from image', done => {
    addGeoFromImage({
      image: 'https://raw.githubusercontent.com/evandentremont/exifdetector/master/exifsample.jpg'
    }).then(diory => {
      expect(diory.data.geo).toEqual({
        latitude: -33.85608611111111,
        longitude: 151.219925,
        zoom: 10,
      })
      done();
    })
  })
})

