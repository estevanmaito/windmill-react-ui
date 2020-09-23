import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children: HTMLTableRowElement
  className?: string
}

type Ref = HTMLTableSectionElement

const TableBody = React.forwardRef<Ref, Props>(function TableBody(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableBody },
  } = useContext(ThemeContext)

  const baseStyle = tableBody.base

  const cls = classNames(baseStyle, className)

  return (
    <tbody className={cls} ref={ref} {...other}>
      {children}
    </tbody>
  )
})

export default TableBody
