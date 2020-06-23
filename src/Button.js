import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import warn from '../utils/warning'

const Button = React.forwardRef(function Button(props, ref) {
  const { tag, disabled, size, layout, block, className, ...other } = props

  warn(
    size === 'icon' && !other['aria-label'],
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  )

  const Component = tag

  const baseStyle =
    'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'
  const blockStyle = 'w-full'
  const sizeStyles = {
    larger: 'px-10 py-4 rounded-lg',
    large: 'px-5 py-3 rounded-lg',
    regular: 'px-4 py-2 rounded-lg text-sm',
    small: 'px-3 py-1 rounded-md text-sm',
    icon: 'px-2 py-2 rounded-lg',
  }
  const layoutStyles = {
    primary: 'text-white bg-purple-600 border border-transparent',
    outline: 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
    link: 'text-gray-600 dark:text-gray-400 focus:outline-none',
  }
  const activeStyles = {
    primary: 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple',
    outline:
      'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray',
    link: 'hover:bg-gray-100 focus:shadow-outline-gray',
  }
  const disabledStyles = {
    primary: 'opacity-50 cursor-not-allowed',
    outline: 'opacity-50 cursor-not-allowed bg-gray-300',
    link: 'opacity-50 cursor-not-allowed',
  }

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownItemStyle =
    'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'

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
