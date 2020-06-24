import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'
import { mergeDeep } from '../utils/mergeDeep'

function Windmill({ children, theme, dark }) {
  const mergedTheme = mergeDeep(defaultTheme, theme)

  useLayoutEffect(() => {
    if (dark) {
      document.documentElement.classList.add(`theme-dark`)
    }
  }, [dark])

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}

Windmill.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  dark: PropTypes.bool,
}

export default Windmill
