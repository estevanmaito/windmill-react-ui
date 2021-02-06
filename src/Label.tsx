import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * Applies specific styles for checkboxes
   */
  check?: boolean
  /**
   * Applies specific styles for radios
   */
  radio?: boolean
  /**
   * Defines if the label is disabled (you should still disable child elements)
   */
  disabled?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, Props>(function Label(props, ref) {
  const { children, check, radio, disabled, className, ...other } = props
  const {
    theme: { label },
  } = useContext(ThemeContext)

  const baseStyle = label.base
  const checkStyle = label.check
  const disabledStyle = label.disabled

  const cls = classNames(
    baseStyle,
    // check and radio are interchangeable
    (check || radio) && checkStyle,
    disabled && disabledStyle,
    className
  )

  return (
    <label className={cls} ref={ref} {...other}>
      {children}
    </label>
  )
})

export default Label
