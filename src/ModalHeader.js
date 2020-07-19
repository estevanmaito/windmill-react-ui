import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const ModalHeader = React.forwardRef(function ModalHeader(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext)

  const baseStyle = modalHeader.base

  const cls = classNames(baseStyle, className)

  return (
    <p className={cls} ref={ref} {...other}>
      {children}
    </p>
  )
})

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalHeader
