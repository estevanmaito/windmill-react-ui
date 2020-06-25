import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function ModalBody({ children, className }) {
  const { modalBody } = useContext(ThemeContext) || defaultTheme

  const baseStyle = modalBody.base

  const cls = classNames(baseStyle, className)

  return <div className={cls}>{children}</div>
}

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalBody
