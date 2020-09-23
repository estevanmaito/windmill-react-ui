import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children: React.ReactNode
  className?: string
}

type Ref = HTMLDivElement

const TableContainer = React.forwardRef<Ref, Props>(function TableContainer(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableContainer },
  } = useContext(ThemeContext)

  const baseStyle = tableContainer.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableContainer
