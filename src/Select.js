import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

const Select = React.forwardRef(function Select(props, ref) {
  const { children, className, multiple, disabled, ...other } = props

  const { select } = useContext(ThemeContext) || defaultTheme

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
  children: PropTypes.element,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Select
