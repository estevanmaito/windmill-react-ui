import React, { useContext } from 'react'
import { mount } from 'enzyme'
import Button from '../src/Button'
import Windmill from '../src/Windmill'
import { ThemeContext } from '../src/context/ThemeContext'

function TestButton() {
  const { toggleTheme } = useContext(ThemeContext)

  return <button onClick={toggleTheme}>Click</button>
}

beforeEach(() => {
  document.documentElement.className = ''
})

describe('Windmill Context', () => {
  it('should use defaultTheme styles', () => {
    const expected =
      'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'
    const wrapper = mount(
      <Windmill>
        <Button />
      </Windmill>
    )

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should extend theme', () => {
    const expected = 'bg-red-600'
    const theme = {
      button: {
        base: 'bg-red-600',
      },
    }
    const wrapper = mount(
      <Windmill theme={theme}>
        <Button />
      </Windmill>
    )

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should not add dark theme class to html element', () => {
    const expected = ''
    mount(
      <Windmill>
        <Button />
      </Windmill>
    )

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })

  it('should add dark theme class to html element', () => {
    const expected = 'theme-dark'
    mount(
      <Windmill dark>
        <Button />
      </Windmill>
    )

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })

  it('should execute the toggleTheme method', () => {
    const expected = 'theme-dark'
    const wrapper = mount(
      <Windmill>
        <TestButton />
      </Windmill>
    )

    const button = wrapper.find('button')

    button.simulate('click')

    expect(document.documentElement.getAttribute('class')).toBe(expected)
  })
})
