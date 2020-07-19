import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const TableContainer = React.forwardRef(function TableContainer(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableContainer },
  } = useContext(ThemeContext)

  const baseStyle = tableContainer.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

TableContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableContainer
