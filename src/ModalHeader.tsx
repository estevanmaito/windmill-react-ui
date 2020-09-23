import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children: React.ReactNode
  className?: string
}

type Ref = HTMLParagraphElement

const ModalHeader = React.forwardRef<Ref, Props>(function ModalHeader(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext)

  const baseStyle = modalHeader.base

  const cls = classNames(baseStyle, className)

  return (
    <p className={cls} ref={ref} {...other}>
      {children}
    </p>
  )
})

export default ModalHeader
