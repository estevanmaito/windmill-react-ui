import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const ModalFooter = React.forwardRef(function ModalFooter(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modalFooter },
  } = useContext(ThemeContext)

  const baseStyle = modalFooter.base

  const cls = classNames(baseStyle, className)

  return (
    <footer className={cls} ref={ref} {...other}>
      {children}
    </footer>
  )
})

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalFooter
