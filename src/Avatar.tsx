import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  size?: 'large' | 'regular' | 'small'
  className?: string
  alt?: string
  // NEEDS REVIEW - could it be more specific?
  src: any
}

type Ref = HTMLDivElement

const Avatar = React.forwardRef<Ref, Props>(function Avatar(props, ref) {
  const { size = 'regular', src, alt, className, ...other } = props
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

export default Avatar
