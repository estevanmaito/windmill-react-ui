import React from 'react'
import { mount } from 'enzyme'
import TableCell from '../TableCell'

describe('TableCell', () => {
  it('should render without crashing', () => {
    mount(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    )
  })

  it('should render with base styles', () => {
    const expected = 'px-4 py-3'
    const wrapper = mount(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    )

    expect(wrapper.find('td').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
