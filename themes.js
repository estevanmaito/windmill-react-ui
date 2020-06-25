import defaultTheme from './src/themes/default'

export function toggleTheme() {
  document.documentElement.classList.toggle('theme-dark')
}

export { defaultTheme }
