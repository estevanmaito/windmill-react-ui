import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function ModalFooter({ children, className }) {
  const {
    theme: { modalFooter },
  } = useContext(ThemeContext)

  const baseStyle = modalFooter.base

  const cls = classNames(baseStyle, className)

  return <footer className={cls}>{children}</footer>
}

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalFooter
