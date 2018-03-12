/* eslint-env jest */
import addMiddleGeo from './addMiddleGeo'

describe('addMiddleGeo', () => {
  it('adds middle point of diorys to diory geo', () => {
    expect(addMiddleGeo({ diorys: {
      1: {
        data: {
          geo: {
            latitude: 1,
            longitude: 1
          }
        }
      },
      2: {
        data: {
          geo: {
            latitude: 2,
            longitude: 2
          }
        }
      }
    }}).data.geo).toEqual({
      latitude: 1.5,
      longitude: 1.5,
      zoom: 10
    })
  })

  it('adds middle point only from diorys with geo', () => {
    expect(addMiddleGeo({ diorys: {
      1: {
        data: {
          geo: {
            latitude: 1,
            longitude: 1
          }
        }
      },
      2: {
        data: {
          geo: {
            latitude: 2,
            longitude: 2
          }
        }
      },
      3: {
        data: {
          geo: {}
        }
      }
    }}).data.geo).toEqual({
      latitude: 1.5,
      longitude: 1.5,
      zoom: 10
    })
  })

  it('adds geo of the only diory', () => {
    expect(addMiddleGeo({ diorys: {
      1: {
        data: {
          geo: {
            latitude: 1,
            longitude: 1
          }
        }
      }
    }}).data.geo).toEqual({
      latitude: 1,
      longitude: 1,
      zoom: 10
    })
  })

  describe('given diorys do not have geo', () => {
    it('does not add geo', () => {
      expect(addMiddleGeo({ diorys: {
        1: {
          data: {
            geo: {}
          }
        }
      }}).data).toBe(undefined)
    })
  })
})
