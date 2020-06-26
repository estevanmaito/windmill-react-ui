import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function TableRow(props) {
  const { className, children, ...other } = props

  const { tableRow } = useContext(ThemeContext) || defaultTheme

  const baseStyle = tableRow.base

  const cls = classNames(baseStyle, className)

  return (
    <tr className={cls} {...other}>
      {children}
    </tr>
  )
}

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableRow
