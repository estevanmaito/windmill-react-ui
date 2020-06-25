import React from 'react'
import { mount } from 'enzyme'
import ModalHeader from '../src/ModalHeader'

describe('ModalHeader', () => {
  it('should render without crashing', () => {
    mount(<ModalHeader />)
  })

  it('should render with base styles', () => {
    const expected = 'mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300'
    const wrapper = mount(<ModalHeader />)

    expect(wrapper.find('p').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
