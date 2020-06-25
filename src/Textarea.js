import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

const Textarea = React.forwardRef(function Textarea(props, ref) {
  const { className, children, ...other } = props

  const { textarea } = useContext(ThemeContext) || defaultTheme

  const baseStyle = textarea.base

  const cls = classNames(baseStyle, className)

  return (
    <textarea className={cls} ref={ref} {...other}>
      {children}
    </textarea>
  )
})

Textarea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Textarea
