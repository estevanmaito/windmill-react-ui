import React from 'react'
import { mount } from 'enzyme'
import Textarea from '../src/Textarea'

describe('Textarea', () => {
  it('should render without crashing', () => {
    mount(<Textarea />)
  })

  it('should render with base styles', () => {
    const expected =
      'block w-full text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
    const wrapper = mount(<Textarea />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
