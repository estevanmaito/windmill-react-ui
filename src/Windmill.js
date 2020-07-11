import React, { useLayoutEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'
import { mergeDeep } from '../utils/mergeDeep'
import useDarkMode from '../utils/useDarkMode'

function Windmill({ children, theme: customTheme, dark, usePreferences }) {
  const mergedTheme = mergeDeep(defaultTheme, customTheme)
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences)

  useLayoutEffect(() => {
    if (dark) {
      if (mode !== null) {
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

Windmill.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  dark: PropTypes.bool,
  usePreferences: PropTypes.bool,
}

Windmill.defaultProps = {
  usePreferences: false,
}

export default Windmill
