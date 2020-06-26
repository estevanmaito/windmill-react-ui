import React from 'react'
import { mount } from 'enzyme'
import TableRow from '../src/TableRow'

describe('TableRow', () => {
  it('should render without crashing', () => {
    mount(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    )
  })

  it('should render with base styles', () => {
    const expected = 'text-gray-700 dark:text-gray-400'
    const wrapper = mount(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    )

    expect(wrapper.find('tr').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
