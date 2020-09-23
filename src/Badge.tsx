import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  className?: string
  type?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary'
}

type Ref = HTMLSpanElement

const Badge = React.forwardRef<Ref, Props>(function Badge(props, ref) {
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
