import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  /**
   * Defines the color of the select
   */
  valid?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(props, ref) {
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

  function hasValidation(valid: boolean | undefined) {
    return valid !== undefined
  }

  function validationStyle(valid: boolean | undefined): string {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  const cls = classNames(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    !multiple && selectStyle,
    className
  )

  return (
    <select className={cls} ref={ref} disabled={disabled} multiple={!!multiple} {...other}>
      {children}
    </select>
  )
})

export default Select
