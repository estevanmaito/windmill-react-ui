import React from 'react'
import { mount } from 'enzyme'
import Select from '../Select'
import theme from '../themes/default'

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
    const expected = theme.select.select
    const wrapper = mount(<Select />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with active styles', () => {
    const expected = theme.select.active
    const wrapper = mount(<Select />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with valid styles', () => {
    const expected = theme.select.valid
    const wrapper = mount(<Select valid />)

    expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with invalid styles', () => {
    const expected = theme.select.invalid
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

  it('should contain name attribute', () => {
    const wrapper = mount(
      <Select name="test-name">
        <option value="lorem">Lorem</option>
      </Select>
    )

    expect(wrapper.find('select[name="test-name"]').getDOMNode().getAttribute('name')).toBeDefined()
  })
})
