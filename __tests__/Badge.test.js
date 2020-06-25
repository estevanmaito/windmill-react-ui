import React from 'react'
import { mount } from 'enzyme'
import Badge from '../src/Badge'

describe('Badge', () => {
  it('should render without crashing', () => {
    mount(<Badge />)
  })

  it('should render with base styles', () => {
    const expected = 'px-2 py-1 text-xs font-medium leading-none rounded-full'
    const wrapper = mount(<Badge />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with success styles', () => {
    const expected = 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100'
    const wrapper = mount(<Badge type="success" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with danger styles', () => {
    const expected = 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700'
    const wrapper = mount(<Badge type="danger" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with warning styles', () => {
    const expected = 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600'
    const wrapper = mount(<Badge type="warning" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with neutral styles', () => {
    const expected = 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700'
    const wrapper = mount(<Badge type="neutral" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with primary styles', () => {
    const expected = 'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600'
    const wrapper = mount(<Badge type="primary" />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with primary styles when no type is used', () => {
    const expected = 'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600'
    const wrapper = mount(<Badge />)

    expect(wrapper.find('span').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
