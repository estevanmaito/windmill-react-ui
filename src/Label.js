import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Label = React.forwardRef(function Label(props, ref) {
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

Label.propTypes = {
  children: PropTypes.element,
  check: PropTypes.bool,
  radio: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Label
