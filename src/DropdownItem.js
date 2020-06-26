import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'
import Button from './Button'

const DropdownItem = React.forwardRef(function DropdownItem(props, ref) {
  // Note: className is passed to the inner Button
  const { className, children, ...other } = props

  const { dropdownItem } = useContext(ThemeContext) || defaultTheme

  const baseStyle = dropdownItem.base

  return (
    <li className={baseStyle}>
      <Button layout="__dropdownItem" ref={ref} className={className} {...other}>
        {children}
      </Button>
    </li>
  )
})

DropdownItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default DropdownItem
