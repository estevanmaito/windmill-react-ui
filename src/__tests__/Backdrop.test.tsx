import React from 'react'
import { render } from '@testing-library/react'
import Backdrop from '../Backdrop'

describe('Backdrop', () => {
  it('should render without crashing', () => {
    render(<Backdrop />)
  })
})
