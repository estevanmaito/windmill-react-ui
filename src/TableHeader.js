import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function TableHeader(props) {
  const { className, children, ...other } = props

  const { tableHeader } = useContext(ThemeContext) || defaultTheme

  const baseStyle = tableHeader.base

  const cls = classNames(baseStyle, className)

  return (
    <thead className={cls} {...other}>
      {children}
    </thead>
  )
}

TableHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableHeader
