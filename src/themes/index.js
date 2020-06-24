import defaultTheme from './default'

export function toggleTheme() {
  document.documentElement.classList.toggle('theme-dark')
}

export { defaultTheme }
