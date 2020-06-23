import React from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object,
}
