import React from 'react'
import { mount } from 'enzyme'
import TableRow from '../TableRow'

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

  it('should not have base styles', () => {
    const expected = ''
    const wrapper = mount(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    )

    expect(wrapper.find('tr').getDOMNode().getAttribute('class')).toBe(expected)
  })
})
