import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import Button from './Button'

interface Props {
  className?: string
  children: React.ReactNode
}

// NEEDS REVIEW
type Ref = React.ReactNode

const DropdownItem = React.forwardRef<Ref, Props>(function DropdownItem(props, ref) {
  // Note: className is passed to the inner Button
  const { className, children, ...other } = props

  const {
    theme: { dropdownItem },
  } = useContext(ThemeContext)

  const baseStyle = dropdownItem.base

  return (
    <li className={baseStyle}>
      <Button layout="__dropdownItem" ref={ref} className={className} {...other}>
        {children}
      </Button>
    </li>
  )
})

export default DropdownItem
