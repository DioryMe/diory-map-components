/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryMapPin from './DioryMapPin'

describe('<DioryMapPin/>', () => {
  let getComponent
  let diory

  beforeEach(() => {
    diory = {}
    getComponent = () => shallow(<DioryMapPin { ...diory } />)
  })

  it('renders with required props', () => {
    expect(getComponent().exists()).toBeTruthy()
  })

  it('renders Diory', () => {
    diory = { some: 'diory' }
    expect(getComponent().find('Diory').props().some).toEqual('diory')
  })

  describe('given children exists', () => {
    beforeEach(() => {
      getComponent = () => shallow(
        <DioryMapPin { ...diory }>
          <div className='some-children' />
        </DioryMapPin>
      )
    })

    it('renders children', () => {
      expect(getComponent().find('.some-children')).toBeTruthy()
    })
  })
})
