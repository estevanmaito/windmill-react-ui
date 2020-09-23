import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children: React.ReactNode
  className?: string
}

type Ref = HTMLDivElement

const CardBody = React.forwardRef<Ref, Props>(function CardBody(props, ref) {
  const { className, children, ...other } = props
  const {
    theme: { cardBody },
  } = useContext(ThemeContext)

  const baseStyle = cardBody.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default CardBody
