import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function Badge(props) {
  const { className, children, type, ...other } = props

  const { badge } = useContext(ThemeContext) || defaultTheme

  const baseStyle = badge.base
  const typeStyle = {
    success: badge.success,
    danger: badge.danger,
    warning: badge.warning,
    neutral: badge.neutral,
    primary: badge.primary,
  }

  const cls = classNames(baseStyle, typeStyle[type], className)

  return (
    <span className={cls} {...other}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['success', 'danger', 'warning', 'neutral', 'primary']),
}

Badge.defaultProps = {
  type: 'primary',
}

export default Badge
