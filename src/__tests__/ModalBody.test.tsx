import React from 'react'
import { mount } from 'enzyme'
import ModalBody from '../ModalBody'

describe('ModalBody', () => {
  it('should render without crashing', () => {
    mount(<ModalBody>Lorem ipsum</ModalBody>)
  })

  it('should render with base styles', () => {
    const expected = 'mb-6 text-sm text-gray-700 dark:text-gray-400'
    const wrapper = mount(<ModalBody>Lorem ipsum</ModalBody>)

    expect(wrapper.find('div').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render children', () => {
    const expected = 2
    const wrapper = mount(
      <ModalBody>
        <p>Lorem</p>
        <p>Ipsum</p>
      </ModalBody>
    )

    expect(wrapper.find('p')).toHaveLength(expected)
  })
})
