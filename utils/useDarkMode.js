import { useEffect, useState } from 'react'

export const useDarkMode = (usePreferences) => {
  if (!usePreferences) return [null, null, null]

  const [mode, setMode] = useState()

  const toggleMode = () => {
    if (mode === 'light') {
      document.documentElement.className = ''
      document.documentElement.classList.add('theme-dark')
      setMode('dark')
    } else {
      document.documentElement.className = ''
      document.documentElement.classList.add('theme-light')
      setMode('light')
    }
  }

  useEffect(() => {
    const userPreference =
      !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    setMode(
      // use stored theme; fallback to user preference
      window.localStorage.getItem('theme') || (userPreference ? 'dark' : 'light')
    )
  }, [])

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode)
      document.documentElement.classList.add(`theme-${mode}`)
    }
  }, [mode])

  return [mode, setMode, toggleMode]
}

export default useDarkMode
