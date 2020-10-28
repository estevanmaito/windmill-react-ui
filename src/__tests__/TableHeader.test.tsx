import React from 'react'
import { mount } from 'enzyme'
import TableHeader from '../TableHeader'

describe('TableHeader', () => {
  it('should render without crashing', () => {
    mount(
      <table>
        <TableHeader />
      </table>
    )
  })

  it('should render with base styles', () => {
    const expected =
      'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'
    const wrapper = mount(
      <table>
        <TableHeader />
      </table>
    )

    expect(wrapper.find('thead').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
