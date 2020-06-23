import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'
import { mergeDeep } from '../utils/mergeDeep'

function Windmill({ children, theme }) {
  const mergedTheme = mergeDeep(defaultTheme, theme)

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}

Windmill.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
}

export default Windmill
