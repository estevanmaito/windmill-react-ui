import React from 'react'
import { mount } from 'enzyme'
import Button from '../Button'
import HeartIcon from './utils/heart.svg'

describe('Base Button', () => {
  it('should render without crashing', () => {
    mount(<Button aria-label="test" />)
  })

  it('should render a button element', () => {
    const wrapper = mount(<Button aria-label="test" />)

    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should render a button with type button', () => {
    const wrapper = mount(<Button aria-label="test" />)

    expect(wrapper.find('button[type="button"]')).toHaveLength(1)
  })

  it('should render a button with type submit', () => {
    const wrapper = mount(<Button aria-label="test" type="submit" />)

    expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
  })

  it('should render a button with type reset', () => {
    const wrapper = mount(<Button aria-label="test" type="reset" />)

    expect(wrapper.find('button[type="reset"]')).toHaveLength(1)
  })

  it('should render an anchor element', () => {
    const wrapper = mount(<Button aria-label="test" tag="a" />)

    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('should not contain type for anchor element', () => {
    const wrapper = mount(<Button aria-label="test" tag="a" />)

    expect(wrapper.find('a').getDOMNode().getAttribute('type')).toBeNull()
  })

  it('should render an arbitrary element', () => {
    const wrapper = mount(<Button aria-label="test" tag="div" />)

    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('should render its children', () => {
    const wrapper = mount(<Button>Hi</Button>)

    expect(wrapper.find('button').text()).toBe('Hi')
  })

  it('should contain base classes', () => {
    const expected =
      'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'
    const wrapper = mount(<Button aria-label="test" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should call onClick callback', (done) => {
    mount(<Button aria-label="test" onClick={() => done()} />).simulate('click')
  })

  it('should contain the appropriate type', () => {
    const expected = 'submit'
    const wrapper = mount(<Button aria-label="test" type="submit" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('type')).toBe(expected)
  })

  it('should render a full width button', () => {
    const expected = 'w-full'
    const wrapper = mount(<Button aria-label="test" block />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render a regular button', () => {
    const expected = 'px-4 py-2 rounded-lg text-sm'
    const wrapper = mount(<Button aria-label="test" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should extend classes', () => {
    const expected = 'ml-2'
    const wrapper = mount(<Button aria-label="test" className="ml-2" />)

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
    const wrapper = mount(<Button aria-label="test" size="larger" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render a large button', () => {
    const expected = 'px-5 py-3 rounded-lg'
    const wrapper = mount(<Button aria-label="test" size="large" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  // the default case is tested in the Base Button suite
  it('should render a regular button', () => {
    const expected = 'px-4 py-2 rounded-lg text-sm'
    const wrapper = mount(<Button aria-label="test" size="regular" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render a small button', () => {
    const expected = 'px-3 py-1 rounded-md text-sm'
    const wrapper = mount(<Button aria-label="test" size="small" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('Primary Button', () => {
  it('should contain primary base classes', () => {
    const expected = 'text-white bg-purple-600 border border-transparent'
    const wrapper = mount(<Button aria-label="test" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain primary active classes', () => {
    const expected = 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple'
    const wrapper = mount(<Button aria-label="test" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain primary disabled classes', () => {
    const expected = 'opacity-50 cursor-not-allowed'
    const wrapper = mount(<Button aria-label="test" disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should not contain primary active classes when disabled', () => {
    const expected = 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple'
    const wrapper = mount(<Button aria-label="test" disabled />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).not.toContain(expected)
  })
})

describe('Custom Button', () => {
  it('should contain custom base classes', () => {
    const expected = 'text-pink-600 dark:text-pink-400'
    const wrapper = mount(<Button aria-label="test" layout="custom" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain custom active classes', () => {
    const expected =
      'active:bg-transparent hover:bg-pink-100 dark:hover:bg-pink-500 dark:hover:text-pink-300'
    const wrapper = mount(<Button aria-label="test" layout="custom" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain custom disabled classes', () => {
    const expected = 'opacity-50 cursor-not-allowed bg-pink-300'
    const wrapper = mount(<Button aria-label="test" layout="custom" disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('Outline Button', () => {
  it('should contain outline base classes', () => {
    const expected = 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none'
    const wrapper = mount(<Button aria-label="test" layout="outline" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain outline active classes', () => {
    const expected =
      'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray'
    const wrapper = mount(<Button aria-label="test" layout="outline" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain outline disabled classes', () => {
    const expected = 'opacity-50 cursor-not-allowed bg-gray-300'
    const wrapper = mount(<Button aria-label="test" layout="outline" disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('Link Button', () => {
  it('should contain link base classes', () => {
    const expected = 'text-gray-600 dark:text-gray-400 focus:outline-none'
    const wrapper = mount(<Button aria-label="test" layout="link" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain link active classes', () => {
    const expected =
      'active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10'
    const wrapper = mount(<Button aria-label="test" layout="link" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain link disabled classes', () => {
    const expected = 'opacity-50 cursor-not-allowed'
    const wrapper = mount(<Button aria-label="test" layout="link" disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('DropdownItem Button', () => {
  it('should contain DropdowItem button classes', () => {
    const expected =
      'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
    const wrapper = mount(<Button aria-label="test" layout="__dropdownItem" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('Pagination Button', () => {
  it('should contain PageButton classes', () => {
    const expected = 'px-3 py-1 rounded-md text-xs'
    const wrapper = mount(<Button aria-label="test" size="pagination" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })
})

describe('Icon', () => {
  it('should contain an svg as a children', () => {
    const wrapper = mount(
      <Button aria-label="test">
        <HeartIcon />
      </Button>
    )

    expect(wrapper.find('svg')).toBeDefined()
  })

  it('should contain an svg passed as prop', () => {
    const wrapper = mount(<Button icon={HeartIcon}>Test</Button>)

    expect(wrapper.find('svg')).toBeDefined()
  })

  it('should render an icon as the first child of the button, using icon', () => {
    const wrapper = mount(<Button icon={HeartIcon}>Lorem</Button>)

    expect(wrapper.find('button').children()).toHaveLength(2)
    expect(wrapper.find('button').childAt(0).type()).toBe(HeartIcon)
    expect(wrapper.find('button').childAt(1).text()).toBe('Lorem')
  })

  it('should render an icon as the first child of the button, using iconLeft', () => {
    const wrapper = mount(<Button iconLeft={HeartIcon}>Lorem</Button>)

    expect(wrapper.find('button').children()).toHaveLength(2)
    expect(wrapper.find('button').childAt(0).type()).toBe(HeartIcon)
    expect(wrapper.find('button').childAt(1).text()).toBe('Lorem')
  })

  it('should render an icon as the last child of the button', () => {
    const wrapper = mount(<Button iconRight={HeartIcon}>Lorem</Button>)

    expect(wrapper.find('button').children()).toHaveLength(2)
    expect(wrapper.find('button').childAt(0).text()).toBe('Lorem')
    expect(wrapper.find('button').childAt(1).type()).toBe(HeartIcon)
  })

  it('should not contain left or right styles', () => {
    const expected = 'mr-2 -ml-1 ml-2 -mr-1'
    const wrapper = mount(<Button aria-label="test" icon={HeartIcon} />)

    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).not.toContain(expected)
  })

  it('should render an icon with left styles', () => {
    const expected = 'mr-2 -ml-1'
    const wrapper = mount(<Button iconLeft={HeartIcon}>Lorem</Button>)

    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render an icon with right styles', () => {
    const expected = 'ml-2 -mr-1'
    const wrapper = mount(<Button iconRight={HeartIcon}>Lorem</Button>)

    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render a button with regular styles if children is present', () => {
    const expected = 'px-4 py-2 rounded-lg text-sm'
    const wrapper = mount(<Button iconLeft={HeartIcon}>Lorem</Button>)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain regular sized button icon classes', () => {
    const expectedButton = 'p-2 rounded-lg'
    const expectedSvg = 'h-5 w-5'
    const wrapper = mount(<Button aria-label="test" icon={HeartIcon} />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton)
    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg)
  })

  it('should contain small sized button icon classes', () => {
    const expectedButton = 'p-2 rounded-md'
    const expectedSvg = 'h-3 w-3'
    const wrapper = mount(<Button aria-label="test" size="small" icon={HeartIcon} />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton)
    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg)
  })

  it('should contain large sized button icon classes', () => {
    const expectedButton = 'p-3 rounded-lg'
    const expectedSvg = 'h-5 w-5'
    const wrapper = mount(<Button aria-label="test" size="large" icon={HeartIcon} />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton)
    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg)
  })

  it('should contain larger sized button icon classes', () => {
    const expectedButton = 'p-4 rounded-lg'
    const expectedSvg = 'h-5 w-5'
    const wrapper = mount(<Button aria-label="test" size="larger" icon={HeartIcon} />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton)
    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg)
  })
})
