import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

function CardBody({ className, children }) {
  const {
    theme: { cardBody },
  } = useContext(ThemeContext)

  const baseStyle = cardBody.base

  const cls = classNames(baseStyle, className)

  return <div className={cls}>{children}</div>
}

CardBody.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
}

export default CardBody
