import React from 'react'
import { mount } from 'enzyme'
import Label from '../Label'

describe('Label', () => {
  it('should render without crashing', () => {
    mount(<Label>Lorem</Label>)
  })

  it('should render with base styles', () => {
    const expected = 'block text-sm text-gray-700 dark:text-gray-400'
    const wrapper = mount(<Label>Lorem</Label>)

    expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with check styles using check prop', () => {
    const expected = 'inline-flex items-center'
    const wrapper = mount(<Label check>Lorem</Label>)

    expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with check styles using radio prop', () => {
    const expected = 'inline-flex items-center'
    const wrapper = mount(<Label radio>Lorem ipsum</Label>)

    expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with disabled styles', () => {
    const expected = 'opacity-50 cursor-not-allowed'
    const wrapper = mount(<Label disabled>Lorem ipsum</Label>)

    expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected)
  })
})
