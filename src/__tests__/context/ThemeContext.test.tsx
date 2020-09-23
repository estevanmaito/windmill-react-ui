import React, { useContext } from 'react'
import { mount } from 'enzyme'
import { ThemeProvider, ThemeContext } from '../../context/ThemeContext'

function TestButton() {
  const { toggleMode } = useContext(ThemeContext)

  return <button onClick={() => toggleMode()}>Click</button>
}

describe('ThemeProvider', () => {
  it('should show value from provider', () => {
    const expected = 'Lorem'
    const wrapper = mount(
      <ThemeProvider value={{ theme: 'Lorem' }}>
        <ThemeContext.Consumer>{(value) => <span>{value.theme}</span>}</ThemeContext.Consumer>
      </ThemeProvider>
    )

    expect(wrapper.find('span').text()).toContain(expected)
  })

  it('should execute the toggleMode method', () => {
    const toggleMode = jest.fn()
    const theme = { test: 'test' }
    const wrapper = mount(
      <ThemeContext.Provider value={{ toggleMode, theme }}>
        <TestButton />
      </ThemeContext.Provider>
    )

    const button = wrapper.find('button')

    button.simulate('click')

    expect(toggleMode).toHaveBeenCalledTimes(1)
  })
})
