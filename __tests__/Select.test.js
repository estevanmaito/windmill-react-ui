import React from 'react'
import { mount } from 'enzyme'
import Select from '../src/Select'

describe('Label', () => {
  it('should render without crashing', () => {
    mount(<Select />)
  })

  it('should render with base styles', () => {
    const expected =
      'block w-full text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
    const wrapper = mount(<Select />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with select styles', () => {
    const expected = 'form-select'
    const wrapper = mount(<Select />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with multiple styles', () => {
    const expected = 'form-multiselect'
    const wrapper = mount(<Select multiple />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800'
    const wrapper = mount(<Select disabled />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render option children', () => {
    const expected = 2
    const wrapper = mount(
      <Select>
        <option>1</option>
        <option>2</option>
      </Select>
    )

    expect(wrapper.find('select').children()).toHaveLength(expected)
  })
})
