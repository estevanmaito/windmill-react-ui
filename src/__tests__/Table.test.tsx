import React from 'react'
import { mount } from 'enzyme'
import Table from '../Table'

describe('Table', () => {
  it('should render without crashing', () => {
    mount(<Table />)
  })

  it('should contain a table', () => {
    const wrapper = mount(<Table />)

    expect(wrapper.find('table')).toBeTruthy()
  })
})
