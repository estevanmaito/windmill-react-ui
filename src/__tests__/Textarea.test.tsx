import React from 'react'
import { mount } from 'enzyme'
import Textarea from '../Textarea'
import theme from '../themes/default'

describe('Textarea', () => {
  it('should render without crashing', () => {
    mount(<Textarea />)
  })

  it('should render with base styles', () => {
    const expected = theme.textarea.base
    const wrapper = mount(<Textarea />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with active styles', () => {
    const expected = theme.textarea.active
    const wrapper = mount(<Textarea />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800'
    const wrapper = mount(<Textarea disabled />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with valid styles', () => {
    const expected = theme.textarea.valid
    const wrapper = mount(<Textarea valid />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with invalid styles', () => {
    const expected = theme.textarea.invalid
    const wrapper = mount(<Textarea valid={false} />)

    expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain name attribute', () => {
    const wrapper = mount(<Textarea name="test-name" />)

    expect(wrapper.find('textarea[name="test-name"]').getDOMNode().getAttribute('name')).toBe(
      'test-name'
    )
  })
})
