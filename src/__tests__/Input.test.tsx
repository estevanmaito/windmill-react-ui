import React from 'react'
import { mount } from 'enzyme'
import Input from '../Input'
import theme from '../themes/default'

describe('Input', () => {
  it('should render without crashing', () => {
    mount(<Input />)
  })

  it('should render with base styles', () => {
    const expected = theme.input.base
    const wrapper = mount(<Input />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with active styles', () => {
    const expected = theme.input.active
    const wrapper = mount(<Input />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800'
    const wrapper = mount(<Input disabled />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with valid styles', () => {
    const expected = theme.input.valid
    const wrapper = mount(<Input valid />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with invalid styles', () => {
    const expected = theme.input.invalid
    const wrapper = mount(<Input valid={false} />)

    expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with radio styles', () => {
    const expected = theme.input.radio
    const wrapper = mount(<Input type="radio" />)

    expect(wrapper.find('input[type="radio"]').getDOMNode().getAttribute('class')).toContain(
      expected
    )
  })

  it('should render with checkbox styles', () => {
    const expected = theme.input.checkbox
    const wrapper = mount(<Input type="checkbox" />)

    expect(wrapper.find('input[type="checkbox"]').getDOMNode().getAttribute('class')).toContain(
      expected
    )
  })

  it('should contain name attribute', () => {
    const wrapper = mount(<Input name="test-name" />)

    expect(wrapper.find('input[name="test-name"]').getDOMNode().getAttribute('name')).toBeDefined()
  })
})
