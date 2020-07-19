import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Card = React.forwardRef(function Card(props, ref) {
  const { className, children, colored, ...other } = props
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

Card.propTypes = {
  children: PropTypes.element,
  colored: PropTypes.bool,
  className: PropTypes.string,
}

Card.defaultProps = {
  colored: false,
}

export default Card
