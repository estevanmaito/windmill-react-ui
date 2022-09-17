import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Alert, { SuccessIcon, DangerIcon, WarningIcon, InfoIcon, NeutralIcon } from '../Alert'

describe('Avatar', () => {
  it('should render without crashing', () => {
    render(<Alert />)
  })

  it('should not contain a close button', () => {
    render(<Alert />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should contain a close button', () => {
    render(<Alert onClose={() => {}} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should call a function when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()
    render(<Alert onClose={onClose} />)

    const closeBtn = screen.getByRole('button')
    await user.click(closeBtn)

    expect(onClose).toHaveBeenCalled()
  })

  it('should render a success icon', () => {
    render(<Alert type="success" />)

    expect(screen.getByTestId('success-icon')).toBeInTheDocument()
  })

  it('should render a danger icon', () => {
    render(<Alert type="danger" />)

    expect(screen.getByTestId('danger-icon')).toBeInTheDocument()
  })

  it('should render an info icon', () => {
    render(<Alert type="info" />)

    expect(screen.getByTestId('info-icon')).toBeInTheDocument()
  })

  it('should render a warning icon', () => {
    render(<Alert type="warning" />)

    expect(screen.getByTestId('warning-icon')).toBeInTheDocument()
  })

  it('should render a neutral icon', () => {
    render(<Alert />)

    expect(screen.getByTestId('neutral-icon')).toBeInTheDocument()
  })

  it('should render a neutral icon for an invalid type', () => {
    // @ts-expect-error
    render(<Alert type="invalid" />)

    expect(screen.getByTestId('neutral-icon')).toBeInTheDocument()
  })
})
