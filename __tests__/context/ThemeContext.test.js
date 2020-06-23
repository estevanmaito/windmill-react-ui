import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider, ThemeContext } from '../../src/context/ThemeContext'

describe('ThemeProvider', () => {
  it('should show value from provider', () => {
    const expected = 'Lorem'
    const wrapper = mount(
      <ThemeProvider value={{ name: 'Lorem' }}>
        <ThemeContext.Consumer>{(value) => <span>{value.name}</span>}</ThemeContext.Consumer>
      </ThemeProvider>
    )

    expect(wrapper.find('span').text()).toContain(expected)
  })
})
