import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

function Card({ className, children, colored }) {
  const { card } = useContext(ThemeContext) || defaultTheme

  const baseStyle = card.base
  const uncoloredStyle = card.default

  const cls = classNames(baseStyle, !colored && uncoloredStyle, className)

  return <div className={cls}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.element,
  colored: PropTypes.bool,
  className: PropTypes.string,
}

Card.defaultProps = {
  colored: false,
}

export default Card
