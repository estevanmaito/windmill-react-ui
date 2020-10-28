import React from 'react'
import { mount } from 'enzyme'
import Modal from '../Modal'

describe('Modal', () => {
  it('should render without crashing', () => {
    const onClose = jest.fn()
    mount(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    )
  })

  it('should render with base styles', () => {
    const onClose = jest.fn()
    const expected =
      'w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl'
    const wrapper = mount(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    )

    expect(wrapper.find('div[role="dialog"]').getDOMNode().getAttribute('class')).toContain(
      expected
    )
  })

  it('should call onClose when Esc is pressed', () => {
    const map = {} as ListenerMap
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb
    })
    const onClose = jest.fn()
    mount(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    )

    map.keydown({ key: 'Esc' })

    expect(onClose).toHaveBeenCalled()
  })

  it('should not call onClose when other key than Esc is pressed', () => {
    const map = {} as ListenerMap
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb
    })
    const onClose = jest.fn()
    mount(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    )

    map.keydown({ key: 'Enter' })

    expect(onClose).not.toHaveBeenCalled()
  })

  it('should remove the event listener on unmount', () => {
    const map = {} as ListenerMap
    const removeListener = jest.fn((e, cb) => {
      map[e] = cb
    })
    document.removeEventListener = removeListener
    const onClose = jest.fn()
    const wrapper = mount(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    )

    wrapper.unmount()

    expect(removeListener).toHaveBeenCalled()
  })

  it('should not close modal when clicking inside it', () => {
    const map = {} as ListenerMap
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb
    })
    const onClose = jest.fn()
    const wrapper = mount(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    )
    const modal = wrapper.find('div[role="dialog"]')

    modal.simulate('click')

    expect(onClose).not.toHaveBeenCalled()
  })
})
