import React from 'react'
import { mount } from 'enzyme'
import TableFooter from '../src/TableFooter'

describe('TableFooter', () => {
  it('should render without crashing', () => {
    mount(<TableFooter />)
  })

  it('should render with base styles', () => {
    const expected =
      'flex flex-col justify-between px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 sm:flex-row bg-gray-50 dark:text-gray-400 dark:bg-gray-800'
    const wrapper = mount(<TableFooter />)

    expect(wrapper.find('div').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
