import React from 'react'
import { mount } from 'enzyme'
import Button from '../src/Button'

describe('Base Button', () => {
  it('should render without crashing', () => {
    mount(<Button />)
  })

  it('should render a button element', () => {
    const wrapper = mount(<Button />)

    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should render an anchor element', () => {
    const wrapper = mount(<Button tag="a" />)

    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('should render its children', () => {
    const wrapper = mount(<Button>Hi</Button>)

    expect(wrapper.find('button').text()).toBe('Hi')
  })

  it('should contain base classes', () => {
    const expected =
      'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'
    const wrapper = mount(<Button />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should call onClick callback', (done) => {
    mount(<Button onClick={() => done()} />).simulate('click')
  })

  it('should contain the appropriate type', () => {
    const expected = 'submit'
    const wrapper = mount(<Button type="submit" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('type')).toBe(expected)
  })

  it('should render an input button', () => {
    const wrapper = mount(<Button tag="input" type="submit" />)

    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('should render a full width button', () => {
    const expected = 'w-full'
    const wrapper = mount(<Button block />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render a regular button', () => {
    const expected = 'px-4 py-2 rounded-lg text-sm'
    const wrapper = mount(<Button />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should extend classes', () => {
    const expected = 'ml-2'
    const wrapper = mount(<Button className="ml-2" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  // it('should warn', () => {
  //   const expected = 'ml-2'
  //   const wrapper = mount(<Button size="icon" />)

  //   expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  // })
})

describe('Sizes', () => {
  it('should render a larger button', () => {
    const expected = 'px-10 py-4 rounded-lg'
    const wrapper = mount(<Button size="larger" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render a large button', () => {
    const expected = 'px-5 py-3 rounded-lg'
    const wrapper = mount(<Button size="large" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  // the default case is tested in the Base Button suite
  it('should render a regular button', () => {
    const expected = 'px-4 py-2 rounded-lg text-sm'
    const wrapper = mount(<Button size="regular" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render a small button', () => {
    const expected = 'px-3 py-1 rounded-md text-sm'
    const wrapper = mount(<Button size="small" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render an icon sized button', () => {
    const expected = 'px-2 py-2 rounded-lg'
    const wrapper = mount(<Button size="icon" aria-label="icon" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('Primary Button', () => {
  it('should contain primary base classes', () => {
    const expected = 'text-white bg-purple-600 border border-transparent'
    const wrapper = mount(<Button />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain primary active classes', () => {
    const expected = 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple'
    const wrapper = mount(<Button />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain primary disabled classes', () => {
    const expected = 'opacity-50 cursor-not-allowed'
    const wrapper = mount(<Button disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should not contain primary active classes when disabled', () => {
    const expected = 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple'
    const wrapper = mount(<Button disabled />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).not.toContain(expected)
  })
})

describe('Outline Button', () => {
  it('should contain outline base classes', () => {
    const expected = 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none'
    const wrapper = mount(<Button layout="outline" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain outline active classes', () => {
    const expected =
      'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray'
    const wrapper = mount(<Button layout="outline" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain outline disabled classes', () => {
    const expected = 'opacity-50 cursor-not-allowed bg-gray-300'
    const wrapper = mount(<Button layout="outline" disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('Link Button', () => {
  it('should contain link base classes', () => {
    const expected = 'text-gray-600 dark:text-gray-400 focus:outline-none'
    const wrapper = mount(<Button layout="link" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain link active classes', () => {
    const expected = 'hover:bg-gray-100 focus:shadow-outline-gray'
    const wrapper = mount(<Button layout="link" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain link disabled classes', () => {
    const expected = 'opacity-50 cursor-not-allowed'
    const wrapper = mount(<Button layout="link" disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })
})
