import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function TableCell(props) {
  const { className, children, ...other } = props

  const {
    theme: { tableCell },
  } = useContext(ThemeContext)

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
