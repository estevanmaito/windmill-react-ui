import React, { useLayoutEffect, useMemo } from 'react'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'
import { mergeDeep } from './utils/mergeDeep'
import useDarkMode from './utils/useDarkMode'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /**
   * Defines the styles used throughout the library
   */
  theme?: object
  /**
   * Defines dark mode as the default theme
   */
  dark?: boolean
  /**
   * Allows the change of theme, reading user's preferences and saving them
   */
  usePreferences?: boolean
}

const Windmill: React.FC<Props> = ({
  children,
  theme: customTheme,
  dark,
  usePreferences = false,
}) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme)
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences)

  useLayoutEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark')
      }
      document.documentElement.classList.add(`theme-dark`)
    }
  }, [dark])

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default Windmill
