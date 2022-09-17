import React from 'react'
import { render } from '@testing-library/react'
import Badge from '../Badge'

describe('Badge', () => {
  it('should render without crashing', () => {
    render(<Badge />)
  })
})
