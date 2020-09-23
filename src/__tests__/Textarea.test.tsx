import React from 'react'
import { mount } from 'enzyme'
import Textarea from '../Textarea'

describe('Textarea', () => {
  it('should render without crashing', () => {
    mount(<Textarea />)
  })

  it('should render with base styles', () => {
    const expected = 'block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none'
    const wrapper = mount(<Textarea />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with active styles', () => {
    const expected =
      'focus:border-purple-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:shadow-outline-gray focus:shadow-outline-purple'
    const wrapper = mount(<Textarea />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800'
    const wrapper = mount(<Textarea disabled />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with valid styles', () => {
    const expected =
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green'
    const wrapper = mount(<Textarea valid />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with invalid styles', () => {
    const expected =
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red'
    const wrapper = mount(<Textarea valid={false} />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
