import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  type?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary'
}

const Badge = React.forwardRef<HTMLSpanElement, Props>(function Badge(props, ref) {
  const { className, children, type = 'primary', ...other } = props

  const {
    theme: { badge },
  } = useContext(ThemeContext)

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
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default Badge
