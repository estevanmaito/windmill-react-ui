import React from 'react'
import { mount } from 'enzyme'
import TableFooter from '../TableFooter'

describe('TableFooter', () => {
  it('should render without crashing', () => {
    mount(<TableFooter />)
  })

  it('should render with base styles', () => {
    const expected =
      'px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800'
    const wrapper = mount(<TableFooter />)

    expect(wrapper.find('div').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
