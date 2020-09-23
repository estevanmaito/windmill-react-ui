import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

// NEEDS REVIEW - Is there a way to accept all possible events without
// specifying every single one? ..other is there for a reason :|
interface Props {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

type Ref = HTMLDivElement

const Backdrop = React.forwardRef<Ref, Props>(function Backdrop(props, ref) {
  const { className, ...other } = props
  const {
    theme: { backdrop },
  } = useContext(ThemeContext)

  const baseStyle = backdrop.base

  const cls = classNames(baseStyle, className)
  return <div className={cls} ref={ref} {...other}></div>
})

export default Backdrop
