import React, { useContext } from 'react'
import { mount } from 'enzyme'
import { ThemeProvider, ThemeContext } from '../../src/context/ThemeContext'

function TestButton() {
  const { toggleTheme } = useContext(ThemeContext)

  return <button onClick={() => toggleTheme()}>Click</button>
}

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

  it('should execute the toggleTheme method', () => {
    const toggleTheme = jest.fn()
    const value = { test: 'test' }
    const wrapper = mount(
      <ThemeContext.Provider value={{ toggleTheme, value }}>
        <TestButton />
      </ThemeContext.Provider>
    )

    const button = wrapper.find('button')

    button.simulate('click')

    expect(toggleTheme).toHaveBeenCalledTimes(1)
  })
})
