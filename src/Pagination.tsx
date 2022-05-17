import React, { useContext, useEffect, useState } from 'react'
import Button, { ButtonAsButtonProps } from './Button'
import { ThemeContext } from './context/ThemeContext'

const PrevIcon: React.FC = function PrevIcon(props) {
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
const PrevDataIcon: React.FC = function PrevDataIcon(props) {
  return (
    <>
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
      <path
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
    </>
  )
}

const NextIcon: React.FC = function NextIcon(props) {
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
const NextDataIcon: React.FC = function NextDataIcon(props) {
  return (
    <>
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
    </>
  )
}

interface NavigationButtonProps extends ButtonAsButtonProps {
  directionIcon: 'prev' | 'next'
}
interface DataNavigationProps extends ButtonAsButtonProps {
  directionIcon: 'prev' | 'next'
}

export const NavigationButton: React.FC<NavigationButtonProps> = function NavigationButton({
  onClick,
  disabled,
  directionIcon,
}) {
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
export const DataSetChangeButton: React.FC<DataNavigationProps> = function NextDataSet({
  onClick,
  directionIcon,
}) {
  const ariaLabel = directionIcon === 'prev' ? 'Previous Data' : 'Next Data'

  const icon = directionIcon === 'prev' ? PrevDataIcon : NextDataIcon

  return (
    <Button
      size="small"
      layout="link"
      icon={icon}
      onClick={onClick}
      aria-label={ariaLabel}
    />
  )
}

interface PageButtonProps extends ButtonAsButtonProps {
  /**
   * The page the button represents
   */
  page: string | number
  /**
   * Defines if the button is active
   */
  isActive?: boolean
}

export const PageButton: React.FC<PageButtonProps> = function PageButton({
  page,
  isActive,
  onClick,
  className
}) {
  return (
    <Button className={className} size="pagination" layout={isActive ? 'primary' : 'link'} onClick={onClick}>
      {page}
    </Button>
  )
}

export const EmptyPageButton = () => <span className="px-2 py-1">...</span>

export interface PaginationProps {
  /**
   * The total number of results
   */
  totalResults: number
  /**
   * The number of results shown per page
   */
  resultsPerPage?: number
  /**
   * The accessible name of the pagination (what does it refer to?)
   */
  label: string
  /**
   * The function executed on page change
   */
  onChange: (activePage: number) => void
  /**
   * The function executed on Data set change
   */
  onChangeDataSet?: ()=>void
}

type Ref = HTMLDivElement

const Pagination = React.forwardRef<Ref, PaginationProps>(function Pagination(props, ref) {
  const { totalResults, resultsPerPage = 10, label, onChange, onChangeDataSet, ...other } = props
  const [pages, setPages] = useState<(number | string)[]>([])
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
  function handleDataSet() {
    typeof onChangeDataSet!=undefined?onChangeDataSet:alert("Please Pass Data Set Change Function To Pagination")
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
  }, [activePage, TOTAL_PAGES])

  useEffect(() => {
    onChange(activePage)
  }, [activePage])

  const {
    theme: { pagination },
  } = useContext(ThemeContext)

  const baseStyle = pagination.base

  return (
    <div className={baseStyle} ref={ref} {...other}>
      {/*
       * This (label) should probably be an option, and not the default
       */}
      <span className="flex items-center font-semibold tracking-wide uppercase">
        Showing {activePage * resultsPerPage - resultsPerPage + 1}-
        {Math.min(activePage * resultsPerPage, totalResults)} of {totalResults}
      </span>

      <div className="flex mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label={label}>
          <ul className="inline-flex items-center">
            <li>
              <DataSetChangeButton
                directionIcon='prev'
                onClick={handleDataSet}
              />
            </li>
            <li>
              <NavigationButton
                directionIcon="prev"
                disabled={activePage === FIRST_PAGE}
                onClick={handlePreviousClick}
              />
            </li>
            {pages.map((p, i) => (
              <li key={p.toString() + i}>
                {p === '...' ? (
                  <EmptyPageButton />
                ) : (
                  <PageButton
                    className='mx-1'
                    page={p}
                    isActive={p === activePage}
                    onClick={() => setActivePage(+p)}
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
            <li>
              <DataSetChangeButton
              directionIcon='next'
              onClick={handleDataSet}
              />
            </li>

          </ul>
        </nav>
      </div>
    </div>
  )
})

export default Pagination
