import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function Label({ children, check, radio, disabled, className }) {
  const { label } = useContext(ThemeContext) || defaultTheme

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

  return <label className={cls}>{children}</label>
}

Label.propTypes = {
  children: PropTypes.element,
  check: PropTypes.bool,
  radio: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Label
