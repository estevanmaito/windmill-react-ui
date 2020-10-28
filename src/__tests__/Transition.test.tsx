import React from 'react'
import { mount } from 'enzyme'
import Transition from '../Transition'

describe('Transition', () => {
  it('should render without crashing', () => {
    mount(
      <Transition
        show={true}
        enter="transform"
        enterFrom="opacity-0 -translate-x-1"
        enterTo="opacity-100 translate-x-1/2"
        leave="transform"
        leaveFrom="opacity-100 translate-x-1/2"
        leaveTo="opacity-0 -translate-x-1"
      >
        <span>Hi</span>
      </Transition>
    )
  })

  it('should render nested transitions', () => {
    mount(
      <Transition show={true}>
        <Transition
          enter="opacity-0"
          enterFrom="opacity-0"
          enterTo="opacity-0"
          leave="opacity-0"
          leaveFrom="opacity-0"
          leaveTo="opacity-0"
        >
          <span>Hi</span>
        </Transition>
      </Transition>
    )
  })
})
