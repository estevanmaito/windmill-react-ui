import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const ModalBody = React.forwardRef(function ModalBody(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modalBody },
  } = useContext(ThemeContext)

  const baseStyle = modalBody.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ModalBody
