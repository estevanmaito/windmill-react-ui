import React from 'react'
import { mount } from 'enzyme'
import TableContainer from '../TableContainer'

describe('TableContainer', () => {
  it('should render without crashing', () => {
    mount(<TableContainer />)
  })

  it('should render with base styles', () => {
    const expected = 'w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5'
    const wrapper = mount(<TableContainer />)

    expect(wrapper.find(TableContainer).getDOMNode().getAttribute('class')).toContain(expected)
  })
})
