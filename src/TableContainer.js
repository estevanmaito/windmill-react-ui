import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function TableContainer(props) {
  const { className, children, ...other } = props

  const { tableContainer } = useContext(ThemeContext) || defaultTheme

  const baseStyle = tableContainer.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  )
}

TableContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableContainer
