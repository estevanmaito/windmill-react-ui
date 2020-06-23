import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import warn from '../utils/warning'
import { ThemeContext } from './context/ThemeContext'
import defaultTheme from './themes/default'

const Button = React.forwardRef(function Button(props, ref) {
  const { tag, disabled, size, layout, block, className, ...other } = props
  const theme = useContext(ThemeContext) || defaultTheme

  warn(
    size === 'icon' && !other['aria-label'],
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  )

  const Component = tag

  const baseStyle = theme['button-base']
  const blockStyle = theme['button-block']
  const sizeStyles = {
    larger: theme['button-size-larger'],
    large: theme['button-size-large'],
    regular: theme['button-size-regular'],
    small: theme['button-size-small'],
    icon: theme['button-size-icon'],
  }
  const layoutStyles = {
    primary: theme['button-primary-base'],
    outline: theme['button-outline-base'],
    link: theme['button-link-base'],
  }
  const activeStyles = {
    primary: theme['button-primary-active'],
    outline: theme['button-outline-active'],
    link: theme['button-link-active'],
  }
  const disabledStyles = {
    primary: theme['button-primary-disabled'],
    outline: theme['button-outline-disabled'],
    link: theme['button-link-disabled'],
  }

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownItemStyle = theme['button-dropdown-item']

  const cls =
    layout === '__dropdownItem'
      ? classNames(dropdownItemStyle, className)
      : classNames(
          baseStyle,
          sizeStyles[size],
          layoutStyles[layout],
          disabled ? disabledStyles[layout] : activeStyles[layout],
          block ? blockStyle : null,
          className
        )

  return <Component className={cls} ref={ref} disabled={disabled} {...other}></Component>
})

Button.propTypes = {
  tag: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['larger', 'large', 'regular', 'small', 'icon']),
  layout: PropTypes.oneOf(['outline', 'link', 'primary', '__dropdownItem']),
  block: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  tag: 'button',
  size: 'regular',
  layout: 'primary',
  block: false,
  disabled: false,
}

export default Button
