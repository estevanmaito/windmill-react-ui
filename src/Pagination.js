import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './context/ThemeContext'
import Button from './Button'

function PrevIcon(props) {
  return (
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

function NextIcon(props) {
  return (
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

export function NavigationButton({ onClick, disabled, directionIcon }) {
  const ariaLabel = directionIcon === 'prev' ? 'Previous' : 'Next'

  const icon = directionIcon === 'prev' ? PrevIcon : NextIcon

  return (
    <Button
      size="small"
      layout="link"
      icon={icon}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    />
  )
}

NavigationButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  directionIcon: PropTypes.oneOf(['prev', 'next']).isRequired,
}

export function PageButton({ page, isActive, onClick }) {
  return (
    <Button size="pagination" layout={isActive ? 'primary' : 'link'} onClick={onClick}>
      {page}
    </Button>
  )
}

PageButton.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
}

export const EmptyPageButton = () => <span className="px-2 py-1">...</span>

function Pagination({ totalResults, resultsPerPage, label, onChange }) {
  const [pages, setPages] = useState([])
  const [activePage, setActivePage] = useState(1)

  const TOTAL_PAGES = Math.ceil(totalResults / resultsPerPage)
  const FIRST_PAGE = 1
  const LAST_PAGE = TOTAL_PAGES
  const MAX_VISIBLE_PAGES = 7

  function handlePreviousClick() {
    setActivePage(activePage - 1)
  }

  function handleNextClick() {
    setActivePage(activePage + 1)
  }

  useEffect(() => {
    // [1], 2, 3, 4, 5, ..., 12 case #1
    // 1, [2], 3, 4, 5, ..., 12
    // 1, 2, [3], 4, 5, ..., 12
    // 1, 2, 3, [4], 5, ..., 12
    // 1, ..., 4, [5], 6, ..., 12 case #2
    // 1, ..., 5, [6], 7, ..., 12
    // 1, ..., 6, [7], 8, ..., 12
    // 1, ..., 7, [8], 9, ..., 12
    // 1, ..., 8, [9], 10, 11, 12 case #3
    // 1, ..., 8, 9, [10], 11, 12
    // 1, ..., 8, 9, 10, [11], 12
    // 1, ..., 8, 9, 10, 11, [12]
    // [1], 2, 3, 4, 5, ..., 8
    // always show first and last
    // max of 7 pages shown (incl. [...])
    if (TOTAL_PAGES <= MAX_VISIBLE_PAGES) {
      setPages(Array.from({ length: TOTAL_PAGES }).map((_, i) => i + 1))
    } else if (activePage < 5) {
      // #1 active page < 5 -> show first 5
      setPages([1, 2, 3, 4, 5, '...', TOTAL_PAGES])
    } else if (activePage >= 5 && activePage < TOTAL_PAGES - 3) {
      // #2 active page >= 5 && < TOTAL_PAGES - 3
      setPages([1, '...', activePage - 1, activePage, activePage + 1, '...', TOTAL_PAGES])
    } else {
      // #3 active page >= TOTAL_PAGES - 3 -> show last
      setPages([
        1,
        '...',
        TOTAL_PAGES - 4,
        TOTAL_PAGES - 3,
        TOTAL_PAGES - 2,
        TOTAL_PAGES - 1,
        TOTAL_PAGES,
      ])
    }
  }, [activePage])

  useEffect(() => {
    onChange(activePage)
  }, [activePage])

  const {
    theme: { pagination },
  } = useContext(ThemeContext)

  const baseStyle = pagination.base

  return (
    <div className={baseStyle}>
      <span className="flex items-center font-semibold tracking-wide uppercase">
        Showing {activePage * resultsPerPage - resultsPerPage + 1}-
        {Math.min.apply(this, [activePage * resultsPerPage, totalResults])} of {totalResults}
      </span>

      <div className="flex mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label={label}>
          <ul className="inline-flex items-center">
            <li>
              <NavigationButton
                directionIcon="prev"
                disabled={activePage === FIRST_PAGE}
                onClick={handlePreviousClick}
              />
            </li>
            {pages.map((p, i) => (
              <li key={p + i}>
                {p === '...' ? (
                  <EmptyPageButton />
                ) : (
                  <PageButton
                    page={p}
                    isActive={p === activePage}
                    onClick={() => setActivePage(p)}
                  />
                )}
              </li>
            ))}
            <li>
              <NavigationButton
                directionIcon="next"
                disabled={activePage === LAST_PAGE}
                onClick={handleNextClick}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  totalResults: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  resultsPerPage: 10,
}

export default Pagination
