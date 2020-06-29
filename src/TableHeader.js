import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function TableHeader(props) {
  const { className, children, ...other } = props

  const {
    theme: { tableHeader },
  } = useContext(ThemeContext)

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
