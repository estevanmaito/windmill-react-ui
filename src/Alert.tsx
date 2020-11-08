import React, { SVGAttributes, useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

enum AlertEnum {
  success,
  danger,
  warning,
  info,
  neutral,
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The type of the alert
   */
  type?: keyof typeof AlertEnum
  /**
   * If defined, shows the close icon that calls this function
   */
  onClose?: () => void
}

type IconProps = SVGAttributes<SVGElement>

export const InfoIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

export const WarningIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

export const DangerIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

export const SuccessIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

export const NeutralIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  const { className, children, type = 'neutral', onClose, ...other } = props
  const {
    theme: { alert },
  } = useContext(ThemeContext)

  const baseStyle = alert.base
  const withCloseStyle = alert.withClose
  const typeStyle = alert[type]
  const iconBaseStyle = alert.icon.base
  const iconTypeStyle = alert.icon[type]

  let Icon
  switch (type) {
    case 'success':
      Icon = SuccessIcon
      break
    case 'warning':
      Icon = WarningIcon
      break
    case 'danger':
      Icon = DangerIcon
      break
    case 'info':
      Icon = InfoIcon
      break
    case 'neutral':
      Icon = NeutralIcon
      break
    default:
      Icon = NeutralIcon
  }

  const cls = classNames(baseStyle, typeStyle, onClose && withCloseStyle, className)

  const iconCls = classNames(iconBaseStyle, iconTypeStyle, 'absolute left-0 top-0 ml-4 mt-4')
  const closeCls = classNames(iconBaseStyle, iconTypeStyle)

  return (
    <div className={cls} role="alert" ref={ref} {...other}>
      {onClose && (
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4" aria-label="close">
          <svg
            className={closeCls}
            fill="currentColor"
            viewBox="0 0 20 20"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      )}
      <Icon className={iconCls} />
      {children}
    </div>
  )
})

export default Alert
