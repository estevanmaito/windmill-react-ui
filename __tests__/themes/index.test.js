import { toggleTheme } from '../../src/themes'

describe('toggleTheme', () => {
  it('should toggle dark theme class in html element', () => {
    toggleTheme()

    expect(document.documentElement.getAttribute('class')).toBe('theme-dark')

    toggleTheme()

    expect(document.documentElement.getAttribute('class')).toBe('')
  })
})
