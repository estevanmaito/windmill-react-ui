import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function ModalBody({ children, className }) {
  const {
    theme: { modalBody },
  } = useContext(ThemeContext)

  const baseStyle = modalBody.base

  const cls = classNames(baseStyle, className)

  return <div className={cls}>{children}</div>
}

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalBody
