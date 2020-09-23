import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children: React.ReactNode
  className?: string
}

type Ref = HTMLTableRowElement

const TableRow = React.forwardRef<Ref, Props>(function TableRow(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableRow },
  } = useContext(ThemeContext)

  const baseStyle = tableRow.base

  const cls = classNames(baseStyle, className)

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  )
})

export default TableRow
