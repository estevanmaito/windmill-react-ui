import React from 'react'
import { mount } from 'enzyme'
import Backdrop from '../Backdrop'

describe('Backdrop', () => {
  it('should render without crashing', () => {
    mount(<Backdrop />)
  })

  it('should render with base styles', () => {
    const expected =
      'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center'
    const wrapper = mount(<Backdrop />)

    expect(wrapper.find(Backdrop).getDOMNode().getAttribute('class')).toContain(expected)
  })
})
