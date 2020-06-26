import React from 'react'
import { mount } from 'enzyme'
import DropdownItem from '../src/DropdownItem'
import Button from '../src/Button'

describe('DropdownItem', () => {
  it('should render without crashing', () => {
    mount(<DropdownItem />)
  })

  it('should render with base styles', () => {
    const expected = 'mb-2 last:mb-0'
    const wrapper = mount(<DropdownItem />)

    expect(wrapper.find('li').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain a Button child', () => {
    const wrapper = mount(<DropdownItem />)

    expect(wrapper.find(Button)).toBeTruthy()
  })

  it('should pass className to the inner button', () => {
    const expected = 'bg-red-600'
    const wrapper = mount(<DropdownItem className="bg-red-600" />)

    expect(wrapper.find(Button).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should pass extra props to the inner button', () => {
    const expected = 'test'
    const wrapper = mount(<DropdownItem tag="a" href="test" />)

    expect(wrapper.find('a').getDOMNode().getAttribute('href')).toContain(expected)
  })
})
