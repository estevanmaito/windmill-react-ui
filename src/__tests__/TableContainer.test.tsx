import React from 'react'
import { mount } from 'enzyme'
import TableContainer from '../TableContainer'
import theme from '../themes/default'

describe('TableContainer', () => {
  it('should render without crashing', () => {
    mount(<TableContainer />)
  })

  it('should render with base styles', () => {
    const expected = theme.tableContainer.base
    const wrapper = mount(<TableContainer />)

    expect(wrapper.find(TableContainer).getDOMNode().getAttribute('class')).toContain(expected)
  })
})
