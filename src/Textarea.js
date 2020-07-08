import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Textarea = React.forwardRef(function Textarea(props, ref) {
  const { valid, disabled, className, children, ...other } = props

  const {
    theme: { textarea },
  } = useContext(ThemeContext)

  const baseStyle = textarea.base
  const activeStyle = textarea.active
  const disabledStyle = textarea.disabled
  const validStyle = textarea.valid
  const invalidStyle = textarea.invalid

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
    className
  )

  return (
    <textarea className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </textarea>
  )
})

Textarea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
}

export default Textarea
