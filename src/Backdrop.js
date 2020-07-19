import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Backdrop = React.forwardRef(function Backdrop(props, ref) {
  const { className, ...other } = props
  const {
    theme: { backdrop },
  } = useContext(ThemeContext)

  const baseStyle = backdrop.base

  const cls = classNames(baseStyle, className)
  return <div className={cls} ref={ref} {...other}></div>
})

Backdrop.propTypes = {
  className: PropTypes.string,
}

export default Backdrop
