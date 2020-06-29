import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Select = React.forwardRef(function Select(props, ref) {
  const { children, className, multiple, disabled, ...other } = props

  const {
    theme: { select },
  } = useContext(ThemeContext)

  const baseStyle = select.base
  const selectStyle = select.select
  const multipleStyle = select.multiple
  const disabledStyle = select.disabled

  const cls = classNames(
    baseStyle,
    disabled && disabledStyle,
    !multiple && selectStyle,
    multiple && multipleStyle,
    className
  )

  return (
    <select className={cls} ref={ref} multiple={!!multiple} {...other}>
      {children}
    </select>
  )
})

Select.propTypes = {
  children: PropTypes.node,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Select
