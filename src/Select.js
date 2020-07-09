import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Select = React.forwardRef(function Select(props, ref) {
  const { valid, children, className, multiple, disabled, ...other } = props

  const {
    theme: { select },
  } = useContext(ThemeContext)

  const baseStyle = select.base
  const activeStyle = select.active
  const validStyle = select.valid
  const invalidStyle = select.invalid
  const disabledStyle = select.disabled
  const selectStyle = select.select
  const multipleStyle = select.multiple

  function hasValidation(valid) {
    return valid !== undefined
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
  }

  const cls = classNames(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    !multiple && selectStyle,
    multiple && multipleStyle,
    className
  )

  return (
    <select className={cls} ref={ref} disabled={disabled} multiple={!!multiple} {...other}>
      {children}
    </select>
  )
})

Select.propTypes = {
  children: PropTypes.node,
  multiple: PropTypes.bool,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Select
