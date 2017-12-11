/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryMapWrapper from './DioryMapWrapper'

describe('<DioryMapWrapper/>', () => {
  let getComponent
  let props
  let MockDioryComponent
  beforeEach(() => {
    props = {}
    MockDioryComponent = () => <div className='some-mockDioryComponent' />
    props.Diory = <MockDioryComponent />
    getComponent = () => shallow(<DioryMapWrapper { ...props } />)
  })

  it('renders with required props', () => {
    expect(getComponent().exists()).toBeTruthy()
  })

  it('sets $hover to hover state', () => {
    props.$hover = true
    expect(getComponent().props().state).toEqual({ hover: true })
  });

  describe('given diory has state prop', () => {
    beforeEach(() => {
      props.Diory = <MockDioryComponent state={{ hover: 'some-diory-state' }} />
    });

    it('sets diory hover state', () => {
      expect(getComponent().props().state).toEqual({ hover: 'some-diory-state' })
    });

    it('does not set $hover to diory hover state', () => {
      props.$hover = true
      expect(getComponent().props().state).not.toEqual({ hover: true })
    });
  });
})
