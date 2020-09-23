import React, { useContext, ReactNode } from 'react'
import classNames from 'classnames'
import warn from './utils/warning'
import { ThemeContext } from './context/ThemeContext'

interface Props {
  children?: React.ReactNode
  tag?: string
  disabled?: boolean
  size?: 'larger' | 'large' | 'regular' | 'small' | 'pagination'
  // NEEDS REVIEW - could it be more specific?
  icon?: any
  iconLeft?: any
  iconRight?: any
  layout?: 'outline' | 'link' | 'primary' | '__dropdownItem'
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  className?: string
  onClick?: React.MouseEvent
}

type Ref = ReactNode | HTMLElement | string

const Button = React.forwardRef<Ref, Props>(function Button(props, ref) {
  const {
    tag = 'button',
    disabled = false,
    size = 'regular',
    layout = 'primary',
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props
  const {
    theme: { button },
  } = useContext(ThemeContext)

  // Fix https://github.com/estevanmaito/windmill-react-ui/issues/7
  if ((tag === 'button' || tag === 'input') && !other.type) {
    other.type = 'button'
  }

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight
  }

  warn(
    hasIcon() && !other['aria-label'],
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  )

  const Component = tag
  const IconLeft = iconLeft || icon
  const IconRight = iconRight

  const baseStyle = button.base
  const blockStyle = button.block
  const sizeStyles = {
    larger: button.size.larger,
    large: button.size.large,
    regular: button.size.regular,
    small: button.size.small,
    /**
     * Only used in Pagination.
     * Not meant for general use.
     */
    pagination: button.size.pagination,
  }
  const iconSizeStyles = {
    larger: button.size.icon.larger,
    large: button.size.icon.large,
    regular: button.size.icon.regular,
    small: button.size.icon.small,
  }
  const iconStyle = button.icon[size]
  const layoutStyles = {
    primary: button.primary.base,
    outline: button.outline.base,
    link: button.link.base,
  }
  const activeStyles = {
    primary: button.primary.active,
    outline: button.outline.active,
    link: button.link.active,
  }
  const disabledStyles = {
    primary: button.primary.disabled,
    outline: button.outline.disabled,
    link: button.link.disabled,
  }

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownItemStyle = button.dropdownItem.base

  const cls =
    layout === '__dropdownItem'
      ? classNames(dropdownItemStyle, className)
      : classNames(
          baseStyle,
          // has icon but no children
          hasIcon() && !children && iconSizeStyles[size],
          // has icon and children
          hasIcon() && children && sizeStyles[size],
          // does not have icon
          !hasIcon() && sizeStyles[size],
          layoutStyles[layout],
          disabled ? disabledStyles[layout] : activeStyles[layout],
          block ? blockStyle : null,
          className
        )

  const iconLeftStyles = classNames(iconStyle, children ? button.icon.left : '')
  const iconRightStyles = classNames(iconStyle, children ? button.icon.right : '')

  return (
    <Component className={cls} ref={ref} disabled={disabled} {...other}>
      {(icon || iconLeft) && <IconLeft className={iconLeftStyles} aria-hidden="true" />}
      {children}
      {iconRight && <IconRight className={iconRightStyles} aria-hidden="true" />}
    </Component>
  )
})

export default Button
