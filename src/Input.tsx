import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.ComponentPropsWithRef<'input'> {
  valid?: boolean
  disabled?: boolean
  type?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(function Input(props, ref) {
  const { valid, disabled, className, type = 'text', ...other } = props

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

  function hasValidation(valid: boolean | undefined) {
    return valid !== undefined
  }

  function validationStyle(valid: boolean | undefined): string {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  function typeStyle(type: string): string {
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

export default Input
