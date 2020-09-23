import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children: React.ReactNode
  className?: string
}

type Ref = HTMLElement

const ModalFooter = React.forwardRef<Ref, Props>(function ModalFooter(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modalFooter },
  } = useContext(ThemeContext)

  const baseStyle = modalFooter.base

  const cls = classNames(baseStyle, className)

  return (
    <footer className={cls} ref={ref} {...other}>
      {children}
    </footer>
  )
})

export default ModalFooter
