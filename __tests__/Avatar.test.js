import React from 'react'
import { mount } from 'enzyme'
import Avatar from '../src/Avatar'

describe('Avatar', () => {
  it('should render without crashing', () => {
    mount(<Avatar src="test" />)
  })

  it('should render with base styles', () => {
    const expected = 'relative rounded-full inline-block'
    const wrapper = mount(<Avatar src="test" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with large styles', () => {
    const expected = 'w-10 h-10'
    const wrapper = mount(<Avatar src="test" size="large" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with regular styles using prop', () => {
    const expected = 'w-8 h-8'
    const wrapper = mount(<Avatar src="test" size="regular" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with regular styles by default', () => {
    const expected = 'w-8 h-8'
    const wrapper = mount(<Avatar src="test" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with small styles', () => {
    const expected = 'w-6 h-6'
    const wrapper = mount(<Avatar src="test" size="small" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain an image with alt text', () => {
    const expected = 'Lorem'
    const wrapper = mount(<Avatar src="test" alt="Lorem" />)

    expect(wrapper.find('img').getDOMNode().getAttribute('alt')).toContain(expected)
  })

  it('should contain an image with the correct src', () => {
    const expected = 'test'
    const wrapper = mount(<Avatar src="test" alt="Lorem" />)

    expect(wrapper.find('img').getDOMNode().getAttribute('src')).toContain(expected)
  })
})
