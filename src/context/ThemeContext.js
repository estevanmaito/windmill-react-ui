import React from 'react'
import PropTypes from 'prop-types'
import defaultTheme from '../themes/default'

export const ThemeContext = React.createContext({ theme: defaultTheme })

export const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object,
}
