import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function TableBody(props) {
  const { className, children, ...other } = props

  const {
    theme: { tableBody },
  } = useContext(ThemeContext)

  const baseStyle = tableBody.base

  const cls = classNames(baseStyle, className)

  return (
    <tbody className={cls} {...other}>
      {children}
    </tbody>
  )
}

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableBody
