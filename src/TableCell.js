import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function TableCell(props) {
  const { className, children, ...other } = props

  const { tableCell } = useContext(ThemeContext) || defaultTheme

  const baseStyle = tableCell.base

  const cls = classNames(baseStyle, className)

  return (
    <td className={cls} {...other}>
      {children}
    </td>
  )
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableCell
