import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children: React.ReactNode
  className?: string
}

type Ref = HTMLDivElement

const TableFooter = React.forwardRef<Ref, Props>(function TableFooter(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableFooter },
  } = useContext(ThemeContext)

  const baseStyle = tableFooter.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableFooter
