/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryMapWrapper from './DioryMapWrapper'

describe('<DioryMapWrapper/>', () => {
  let getComponent
  const MockDioryComponent = () => <div className='some-mockDioryComponent' />

  beforeEach(() => {
    getComponent = () => shallow(<DioryMapWrapper Diory={ MockDioryComponent } />)
  })

  it('renders with required props', () => {
    expect(getComponent().exists()).toBeTruthy()
  })
})
