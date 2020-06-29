import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function ModalHeader({ children, className }) {
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext)

  const baseStyle = modalHeader.base

  const cls = classNames(baseStyle, className)

  return <p className={cls}>{children}</p>
}

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalHeader
