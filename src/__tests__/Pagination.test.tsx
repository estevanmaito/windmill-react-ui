import React from 'react'
import { mount } from 'enzyme'
import Pagination, { PageButton, NavigationButton, EmptyPageButton, CurrentPageTextParams } from '../Pagination'

describe('NavigationButton', () => {
  it('should render without crashing', () => {
    const onClick = () => {}
    mount(<NavigationButton directionIcon="prev" onClick={onClick} />)
  })

  it('should contain "Previous" aria-label based on directionIcon', () => {
    const onClick = () => {}
    const expected = 'Previous'
    const wrapper = mount(<NavigationButton directionIcon="prev" onClick={onClick} />)

    expect(wrapper.find('button').getDOMNode().getAttribute('aria-label')).toContain(expected)
  })

  it('should contain "Next" aria-label based on directionIcon', () => {
    const onClick = () => {}
    const expected = 'Next'
    const wrapper = mount(<NavigationButton directionIcon="next" onClick={onClick} />)

    expect(wrapper.find('button').getDOMNode().getAttribute('aria-label')).toContain(expected)
  })

  it('should contain a child SVG', () => {
    const onClick = () => {}
    const expectedSvg = 'h-3 w-3'
    const wrapper = mount(<NavigationButton directionIcon="prev" onClick={onClick} />)

    expect(wrapper.find('svg')).toBeDefined()
    expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg)
  })

  it('should call onClick', () => {
    const onClick = jest.fn()
    const wrapper = mount(<NavigationButton directionIcon="next" onClick={onClick} />)
    wrapper.find('button').simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('PageButton', () => {
  it('should render without crashing', () => {
    const onClick = () => {}
    mount(<PageButton page={1} onClick={onClick} />)
  })

  it('should render the right page', () => {
    const onClick = () => {}
    const expected = 1
    const wrapper = mount(<PageButton isActive page={1} onClick={onClick} />)

    expect(wrapper.find('button').text()).toContain(expected)
  })

  it('should contain text-xs', () => {
    const onClick = () => {}
    const expected = 'text-xs'
    const wrapper = mount(<PageButton isActive page={1} onClick={onClick} />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should call onClick', () => {
    const onClick = jest.fn()
    const wrapper = mount(<PageButton page={1} onClick={onClick} />)
    wrapper.find('button').simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('EmptyPageButton', () => {
  it('should render without crashing', () => {
    mount(<EmptyPageButton />)
  })

  it('should render three dots as children', () => {
    const expected = '...'
    const wrapper = mount(<EmptyPageButton />)

    expect(wrapper.find('span').text()).toContain(expected)
  })
})

describe('Pagination', () => {
  it('should render without crashing', () => {
    const onChange = () => {}
    mount(<Pagination totalResults={123} label="Navigation" onChange={onChange} />)
  })

  it('should render with base styles', () => {
    const onChange = () => {}
    const expected =
      'flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400'
    const wrapper = mount(<Pagination totalResults={123} label="Navigation" onChange={onChange} />)

    expect(wrapper.find(Pagination).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render next and previous buttons', () => {
    const onChange = () => {}
    const wrapper = mount(<Pagination totalResults={123} label="Navigation" onChange={onChange} />)

    expect(wrapper.find('button[aria-label="Next"]')).toBeTruthy()
    expect(wrapper.find('button[aria-label="Previous"]')).toBeTruthy()
  })

  it('should render a list with exact children', () => {
    const onChange = () => {}
    const expected = 7
    const wrapper = mount(<Pagination totalResults={50} label="Navigation" onChange={onChange} />)

    expect(wrapper.find('ul').children().length).toBe(expected)
  })

  it('should never render a list with more than 9 children', () => {
    const onChange = () => {}
    // accounts for 2 nav buttons
    const expected = 9
    const wrapper = mount(<Pagination totalResults={120} label="Navigation" onChange={onChange} />)

    expect(wrapper.find('ul').children().length).toBe(expected)
  })

  it('should render a list taking into account resultsPerPage', () => {
    const onChange = () => {}
    const expected = 6
    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    expect(wrapper.find(PageButton).children().length).toBe(expected)
  })

  it('should call click handler on next button', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const nextButton = wrapper.find('button[aria-label="Next"]')
    nextButton.simulate('click')

    // one on render and another on click
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('should call click handler on prev button', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const nextButton = wrapper.find('button[aria-label="Next"]')
    // go forward one page to activate prev button
    nextButton.simulate('click')

    const prevButton = wrapper.find('button[aria-label="Previous"]')
    // click the active prev button
    prevButton.simulate('click')

    // one on render, one on next and another on prev
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  it('should not call click handler on prev button if first page', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const prevButton = wrapper.find('button[aria-label="Previous"]')
    prevButton.simulate('click')

    // one on render
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('should not call click handler on next button if last page', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Pagination totalResults={10} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const nextButton = wrapper.find('button[aria-label="Next"]')
    nextButton.simulate('click')
    nextButton.simulate('click')

    // one on render and one of the above clicks are ignored
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('should call click handler on prev button', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const nextButton = wrapper.find('button[aria-label="Next"]')
    // go forward one page to activate prev button
    nextButton.simulate('click')

    const prevButton = wrapper.find('button[aria-label="Previous"]')
    // click the active prev button
    prevButton.simulate('click')

    // one on render, one on next and another on prev
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  it('should render two "..." in the middle of a big list', () => {
    const onChange = () => {}
    const wrapper = mount(
      <Pagination totalResults={50} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const nextButton = wrapper.find('button[aria-label="Next"]')
    // go to page 5
    nextButton.simulate('click')
    nextButton.simulate('click')
    nextButton.simulate('click')
    nextButton.simulate('click')

    expect(wrapper.find(EmptyPageButton)).toHaveLength(2)
  })

  it('should render the last 5 items', () => {
    const onChange = () => {}
    const wrapper = mount(
      <Pagination totalResults={50} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const nextButton = wrapper.find('button[aria-label="Next"]')
    // go to page 7
    nextButton.simulate('click')
    nextButton.simulate('click')
    nextButton.simulate('click')
    nextButton.simulate('click')
    nextButton.simulate('click')
    nextButton.simulate('click')

    const pageButtons = wrapper.find(PageButton).children()

    // not considering '...' see last line test
    const pagesArray = ['1', '6', '7', '8', '9', '10']
    pageButtons.forEach((b, i) => {
      expect(b.text()).toBe(pagesArray[i])
    })

    expect(wrapper.find(EmptyPageButton)).toHaveLength(1)
  })

  it('should call click handler on page button', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    const thirdPage = wrapper.find(PageButton).at(2)
    // go forward one page to activate prev button
    thirdPage.simulate('click')

    expect(onChange).toHaveBeenCalledWith(3)
  })

  it('should update the pages total when totalResults is updated', () => {
    const onChange = () => {}
    const expectedBeforeUpdate = 6
    const expectedAfterUpdate = 4

    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    expect(wrapper.find(PageButton).children().length).toBe(expectedBeforeUpdate)

    wrapper.setProps({ totalResults: 20, resultsPerPage: 5 })
    wrapper.update()
    expect(wrapper.find(PageButton).children().length).toBe(expectedAfterUpdate)
  })

  it('should update the pages total when resultsPerPage is updated', () => {
    const onChange = () => {}
    const expectedBeforeUpdate = 6
    const expectedAfterUpdate = 3

    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    expect(wrapper.find(PageButton).children().length).toBe(expectedBeforeUpdate)

    wrapper.setProps({ resultsPerPage: 10 })
    wrapper.update()
    expect(wrapper.find(PageButton).children().length).toBe(expectedAfterUpdate)
  })

  it('should work without currentPageText prop', () => {
    const onChange = () => {}

    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} />
    )

    expect(wrapper.find('[data-testid="current-page-text"]').text()).toEqual('Showing 1-5 of 30')
  })

  it('should use currentPageText prop for custom text formatting', () => {
    const onChange = () => {}

    const currentPageText = ({ pageStart, pageEnd, totalResults }: CurrentPageTextParams) =>
      `Total results: ${totalResults}. Showing between ${pageStart} and ${pageEnd}.`

    const wrapper = mount(
      <Pagination totalResults={30} resultsPerPage={5} label="Navigation" onChange={onChange} currentPageText={currentPageText} />
    )

    expect(wrapper.find('[data-testid="current-page-text"]').text()).toEqual('Total results: 30. Showing between 1 and 5.')
  })
})
