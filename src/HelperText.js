import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const HelperText = React.forwardRef(function HelperText(props, ref) {
  const { children, valid, className, ...other } = props
  const {
    theme: { helperText },
  } = useContext(ThemeContext)

  const baseStyle = helperText.base
  const validStyle = helperText.valid
  const invalidStyle = helperText.invalid

  function hasValidation(valid) {
    return valid !== undefined
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
  }

  const cls = classNames(baseStyle, validationStyle(valid), className)

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

HelperText.propTypes = {
  children: PropTypes.node,
  valid: PropTypes.bool,
  className: PropTypes.string,
}

export default HelperText
