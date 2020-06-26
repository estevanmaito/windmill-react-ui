import React from 'react'
import { mount } from 'enzyme'
import Avatar from '../src/Avatar'

describe('Avatar', () => {
  it('should render without crashing', () => {
    mount(<Avatar img="test" />)
  })

  it('should render with base styles', () => {
    const expected = 'relative rounded-full'
    const wrapper = mount(<Avatar img="test" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with large styles', () => {
    const expected = 'w-10 h-10'
    const wrapper = mount(<Avatar img="test" size="large" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with regular styles using prop', () => {
    const expected = 'w-8 h-8'
    const wrapper = mount(<Avatar img="test" size="regular" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with regular styles by default', () => {
    const expected = 'w-8 h-8'
    const wrapper = mount(<Avatar img="test" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with small styles', () => {
    const expected = 'w-6 h-6'
    const wrapper = mount(<Avatar img="test" size="small" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain an image with alt text', () => {
    const expected = 'Lorem'
    const wrapper = mount(<Avatar img="test" alt="Lorem" />)

    expect(wrapper.find('img').getDOMNode().getAttribute('alt')).toContain(expected)
  })
})
