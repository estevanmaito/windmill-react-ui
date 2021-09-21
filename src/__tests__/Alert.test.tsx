import React from 'react'
import { mount } from 'enzyme'
import Alert, { SuccessIcon, DangerIcon, WarningIcon, InfoIcon, NeutralIcon } from '../Alert'

describe('Avatar', () => {
  it('should render without crashing', () => {
    mount(<Alert />)
  })

  it('should not contain a close button', () => {
    const wrapper = mount(<Alert />)

    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('should contain a close button', () => {
    const wrapper = mount(<Alert onClose={() => {}} />)

    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should call a function when close button is clicked', () => {
    const onClose = jest.fn()
    const wrapper = mount(<Alert onClose={onClose} />)

    wrapper.find('button[aria-label="close"]').simulate('click')

    expect(onClose).toHaveBeenCalled()
  })

  it('should render a success icon', () => {
    const wrapper = mount(<Alert type="success" />)
    const Icon = SuccessIcon

    expect(wrapper.find(Icon)).toHaveLength(1)
  })

  it('should render a danger icon', () => {
    const wrapper = mount(<Alert type="danger" />)
    const Icon = DangerIcon

    expect(wrapper.find(Icon)).toHaveLength(1)
  })

  it('should render an info icon', () => {
    const wrapper = mount(<Alert type="info" />)
    const Icon = InfoIcon

    expect(wrapper.find(Icon)).toHaveLength(1)
  })

  it('should render a warning icon', () => {
    const wrapper = mount(<Alert type="warning" />)
    const Icon = WarningIcon

    expect(wrapper.find(Icon)).toHaveLength(1)
  })

  it('should render a neutral icon', () => {
    const wrapper = mount(<Alert />)
    const Icon = NeutralIcon

    expect(wrapper.find(Icon)).toHaveLength(1)
  })

  it('should render a neutral icon for an invalid type', () => {
    // @ts-expect-error
    const wrapper = mount(<Alert type="invalid" />)
    const Icon = NeutralIcon

    expect(wrapper.find(Icon)).toHaveLength(1)
  })
})
