import React from 'react'
import { mount } from 'enzyme'
import Select from '../Select'

describe('Select', () => {
  it('should render without crashing', () => {
    mount(
      <Select>
        <option value="lorem">Lorem</option>
      </Select>
    )
  })

  it('should render with base styles', () => {
    const expected = 'block w-full text-sm dark:text-gray-300 focus:outline-none'
    const wrapper = mount(<Select />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with select styles', () => {
    const expected = 'form-select leading-5'
    const wrapper = mount(<Select />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with multiple styles', () => {
    const expected = 'form-multiselect'
    const wrapper = mount(<Select multiple />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with active styles', () => {
    const expected =
      'focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600'
    const wrapper = mount(<Select />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with valid styles', () => {
    const expected =
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green'
    const wrapper = mount(<Select valid />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with invalid styles', () => {
    const expected =
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red'
    const wrapper = mount(<Select valid={false} />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800'
    const wrapper = mount(<Select disabled />)

    expect(wrapper.find('select[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
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
