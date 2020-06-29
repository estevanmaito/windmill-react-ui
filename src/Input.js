import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Input = React.forwardRef(function Input(props, ref) {
  const { valid, disabled, className, type, ...other } = props

  const {
    theme: { input },
  } = useContext(ThemeContext)

  const baseStyle = input.base
  const activeStyle = input.active
  const disabledStyle = input.disabled
  const validStyle = input.valid
  const invalidStyle = input.invalid
  const radioStyle = input.radio
  const checkStyle = input.checkbox

  function hasValidation(valid) {
    return valid !== undefined
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
  }

  function typeStyle(type) {
    switch (type) {
      case 'radio':
        return radioStyle
      case 'checkbox':
        return checkStyle
      default:
        return baseStyle
    }
  }

  const cls = classNames(
    typeStyle(type),
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  )

  return <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
})

Input.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
