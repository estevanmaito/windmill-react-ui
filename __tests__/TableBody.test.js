import React from 'react'
import { mount } from 'enzyme'
import TableBody from '../src/TableBody'

describe('TableBody', () => {
  it('should render without crashing', () => {
    mount(
      <table>
        <TableBody />
      </table>
    )
  })

  it('should render with base styles', () => {
    const expected = 'bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'
    const wrapper = mount(
      <table>
        <TableBody />
      </table>
    )

    expect(wrapper.find('tbody').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
