import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function TableFooter(props) {
  const { className, children, ...other } = props

  const { tableFooter } = useContext(ThemeContext) || defaultTheme

  const baseStyle = tableFooter.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  )
}

TableFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableFooter
