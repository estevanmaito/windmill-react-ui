import React, { useLayoutEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'
import { mergeDeep } from '../utils/mergeDeep'

function Windmill({ children, theme, dark }) {
  const mergedTheme = mergeDeep(defaultTheme, theme)
  const [isDark, setIsDark] = useState(false)

  useLayoutEffect(() => {
    if (dark) {
      setIsDark(true)
      document.documentElement.classList.add(`theme-dark`)
    }
  }, [dark])

  function toggleTheme() {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('theme-dark')
  }

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      isDark,
      toggleTheme,
    }),
    [theme, isDark]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

Windmill.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  dark: PropTypes.bool,
}

export default Windmill
