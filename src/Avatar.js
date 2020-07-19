import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'

const Avatar = React.forwardRef(function Avatar(props, ref) {
  const { size, src, alt, className, ...other } = props
  const {
    theme: { avatar },
  } = useContext(ThemeContext)

  const baseStyle = avatar.base
  const sizeStyles = {
    large: avatar.size.large,
    regular: avatar.size.regular,
    small: avatar.size.small,
  }

  const cls = classNames(baseStyle, sizeStyles[size], className)

  return (
    <div className={cls} ref={ref} {...other}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </div>
  )
})

Avatar.propTypes = {
  size: PropTypes.oneOf(['large', 'regular', 'small']),
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.any.isRequired,
}

Avatar.defaultProps = {
  size: 'regular',
}

export default Avatar
