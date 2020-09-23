import React, { useEffect, useContext, useRef } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'
import Transition from './Transition'
import FocusLock from 'react-focus-lock'

interface Props {
  children: React.ReactNode
  className?: string
  onClose: () => void
  isOpen: boolean
  align?: 'left' | 'right'
}

type Ref = HTMLDivElement

const Dropdown = React.forwardRef<Ref, Props>(function Dropdown(props, ref) {
  const { children, onClose, isOpen, className, align = 'left', ...other } = props
  const {
    theme: { dropdown },
  } = useContext(ThemeContext)

  const baseStyle = dropdown.base
  const alignStyle = dropdown.align[align]

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  const dropdownRef = useRef<HTMLUListElement>(null)
  function handleClickOutside(e: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const cls = classNames(baseStyle, alignStyle, className)

  return (
    <Transition
      show={isOpen}
      leave="transition ease-out duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div ref={ref}>
        <FocusLock returnFocus>
          <ul className={cls} ref={dropdownRef} aria-label="submenu" {...other}>
            {children}
          </ul>
        </FocusLock>
      </div>
    </Transition>
  )
})

export default Dropdown
