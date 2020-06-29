import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function TableFooter(props) {
  const { className, children, ...other } = props

  const {
    theme: { tableFooter },
  } = useContext(ThemeContext)

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
