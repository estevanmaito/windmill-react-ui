import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Removes default styles (if true) so you can override with your own background styles
   */
  colored?: boolean
}

const Card = React.forwardRef<HTMLDivElement, Props>(function Card(props, ref) {
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
