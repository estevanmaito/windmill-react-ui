import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function ModalFooter({ children, className }) {
  const { modalFooter } = useContext(ThemeContext) || defaultTheme

  const baseStyle = modalFooter.base

  const cls = classNames(baseStyle, className)

  return <footer className={cls}>{children}</footer>
}

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalFooter
