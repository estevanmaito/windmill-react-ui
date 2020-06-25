import React from 'react'
import { mount } from 'enzyme'
import CardBody from '../src/CardBody'

describe('CardBody', () => {
  it('should render without crashing', () => {
    mount(<CardBody />)
  })

  it('should render with default styles', () => {
    const expected = 'p-4'
    const wrapper = mount(<CardBody />)

    expect(wrapper.find(CardBody).getDOMNode().getAttribute('class')).toContain(expected)
  })
})
