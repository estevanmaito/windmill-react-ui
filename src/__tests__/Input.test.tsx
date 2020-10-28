import React from 'react'
import { mount } from 'enzyme'
import Input from '../Input'

describe('Input', () => {
  it('should render without crashing', () => {
    mount(<Input />)
  })

  it('should render with base styles', () => {
    const expected =
      'block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5'
    const wrapper = mount(<Input />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with active styles', () => {
    const expected =
      'focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700'
    const wrapper = mount(<Input />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800'
    const wrapper = mount(<Input disabled />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with valid styles', () => {
    const expected =
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green'
    const wrapper = mount(<Input valid />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with invalid styles', () => {
    const expected =
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red'
    const wrapper = mount(<Input valid={false} />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with radio styles', () => {
    const expected =
      'text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
    const wrapper = mount(<Input type="radio" />)

    expect(wrapper.find('input[type="radio"]').getDOMNode().getAttribute('class')).toContain(
      expected
    )
  })

  it('should render with checkbox styles', () => {
    const expected =
      'text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
    const wrapper = mount(<Input type="checkbox" />)

    expect(wrapper.find('input[type="checkbox"]').getDOMNode().getAttribute('class')).toContain(
      expected
    )
  })
})
