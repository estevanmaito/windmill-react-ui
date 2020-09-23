import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children?: React.ReactNode
  className?: string
  colored?: boolean
}

type Ref = HTMLDivElement

const Card = React.forwardRef<Ref, Props>(function Card(props, ref) {
  const { className, children, colored = false, ...other } = props
  const {
    theme: { card },
  } = useContext(ThemeContext)

  const baseStyle = card.base
  const uncoloredStyle = card.default

  const cls = classNames(baseStyle, !colored && uncoloredStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default Card
