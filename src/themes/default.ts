export default {
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5',
    withClose: 'pr-12',
    success: 'bg-success-50 text-success-900 dark:bg-success-600 dark:text-darkText',
    danger: 'bg-error-50 text-error-900 dark:bg-error-600 dark:text-darkText',
    warning: 'bg-warning-50 text-warning-900 dark:bg-warning-600 dark:text-darkText',
    neutral: 'bg-neutral-50 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300',
    info: 'bg-info-50 text-info-900 dark:bg-info-600 dark:text-darkText',
    icon: {
      base: 'h-5 w-5',
      success: 'text-success-400 dark:text-success-300',
      danger: 'text-error-400 dark:text-error-300',
      warning: 'text-warning-400 dark:text-warning-100',
      neutral: 'text-neutral-400 dark:text-neutral-500',
      info: 'text-info-400 dark:text-info-300',
    },
  },
  pagination: {
    base:
      'flex flex-col justify-between text-xs sm:flex-row text-neutral-600 dark:text-neutral-400',
  },
  tableFooter: {
    base:
      'px-4 py-3 border-t dark:border-neutral-700 bg-neutral-50 text-neutral-500 dark:text-neutral-400 dark:bg-neutral-800',
  },
  tableRow: { base: '' },
  tableHeader: {
    base:
      'text-xs font-semibold tracking-wide text-left text-neutral-500 uppercase border-b dark:border-neutral-700 bg-neutral-50 dark:text-neutral-400 dark:bg-neutral-800',
  },
  tableContainer: { base: 'w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5' },
  tableCell: { base: 'px-4 py-3' },
  tableBody: {
    base:
      'bg-darkText divide-y dark:divide-neutral-700 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400',
  },
  dropdownItem: { base: 'mb-2 last:mb-0' },
  dropdown: {
    base:
      'absolute w-56 p-2 mt-2 text-neutral-600 bg-darkText border border-neutral-100 rounded-lg shadow-md min-w-max-content dark:text-neutral-300 dark:border-neutral-700 dark:bg-neutral-700',
    align: { left: 'left-0', right: 'right-0' },
  },
  avatar: {
    base: 'relative rounded-full inline-block',
    size: { large: 'w-10 h-10', regular: 'w-8 h-8', small: 'w-6 h-6' },
  },
  modal: {
    base:
      'w-full px-6 py-4 overflow-hidden bg-darkText rounded-t-lg dark:bg-neutral-800 sm:rounded-lg sm:m-4 sm:max-w-xl',
  },
  modalBody: { base: 'mb-6 text-sm text-neutral-700 dark:text-neutral-400' },
  modalFooter: {
    base:
      'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-neutral-50 dark:bg-neutral-800',
  },
  modalHeader: { base: 'mt-4 mb-2 text-lg font-semibold text-neutral-700 dark:text-neutral-300' },
  badge: {
    base: 'inline-flex px-2 text-xs font-medium leading-5 rounded-full',
    success: 'text-success-700 bg-success-100 dark:bg-success-700 dark:text-success-100',
    danger: 'text-error-700 bg-error-100 dark:text-error-100 dark:bg-error-700',
    warning: 'text-darkWarning-700 bg-darkWarning-100 dark:text-darkText dark:bg-darkWarning-600',
    neutral: 'text-neutral-700 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-700',
    primary: 'text-primary-700 bg-primary-100 dark:text-darkText dark:bg-primary-600',
  },
  backdrop: {
    base:
      'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center',
  },
  textarea: {
    base: 'block w-full text-sm dark:text-neutral-300 rounded-md focus:outline-none',
    active:
      'focus:border-primary-400 border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:bg-neutral-700 dark:focus:ring-neutral-300 focus:ring focus:ring-primary-300',
    disabled: 'cursor-not-allowed opacity-50 bg-neutral-300 dark:bg-neutral-800',
    valid:
      'border-success-600 dark:bg-neutral-700 focus:border-success-400 dark:focus:border-success-400 focus:ring focus:ring-success-200 dark:focus:ring-success-200',
    invalid:
      'border-error-600 dark:bg-neutral-700 focus:border-error-400 dark:focus:border-error-400 focus:ring focus:ring-error-200 dark:focus:ring-error-200',
  },
  select: {
    base: 'block w-full text-sm dark:text-neutral-300 focus:outline-none rounded-md',
    active:
      'focus:border-primary-400 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 focus:ring focus:ring-primary-300 dark:focus:ring-neutral-300 dark:focus:border-neutral-600',
    select: 'leading-5',
    disabled: 'cursor-not-allowed opacity-50 bg-neutral-300 dark:bg-neutral-800',
    valid:
      'border-success-600 dark:bg-neutral-700 focus:border-success-400 dark:focus:border-success-400 focus:ring focus:ring-success-200 dark:focus:ring-success-200',
    invalid:
      'border-error-600 dark:bg-neutral-700 focus:border-error-400 dark:focus:border-error-400 focus:ring focus:ring-error-200 dark:focus:ring-error-200',
  },
  label: {
    base: 'block text-sm text-neutral-700 dark:text-neutral-400',
    check: 'inline-flex items-center',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  input: {
    base: 'block w-full text-sm focus:outline-none dark:text-neutral-300 leading-5 rounded-md',
    active:
      'focus:border-primary-400 border-neutral-300 dark:border-neutral-600 focus:ring focus:ring-primary-300 dark:focus:border-neutral-600 dark:focus:ring-neutral-300 dark:bg-neutral-700',
    disabled: 'cursor-not-allowed opacity-50 bg-neutral-300 dark:bg-neutral-800',
    valid:
      'border-success-600 dark:bg-neutral-700 focus:border-success-400 dark:focus:border-success-400 focus:ring focus:ring-success-200 dark:focus:ring-success-200',
    invalid:
      'border-error-600 dark:bg-neutral-700 focus:border-error-400 dark:focus:border-error-400 focus:ring focus:ring-error-200 dark:focus:ring-error-200',
    radio:
      'text-primary-600 form-radio focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-0 dark:focus:ring-neutral-300',
    checkbox:
      'text-primary-600 form-checkbox focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-0 rounded dark:focus:ring-neutral-300',
  },
  helperText: {
    base: 'text-xs',
    valid: 'text-success-600 dark:text-success-400',
    invalid: 'text-error-600 dark:text-error-400',
  },
  card: {
    base: 'min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden',
    default: 'bg-darkText dark:bg-neutral-800',
  },
  cardBody: { base: 'p-4' },
  button: {
    base:
      'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
    block: 'w-full',
    size: {
      larger: 'px-10 py-4 rounded-lg',
      large: 'px-5 py-3 rounded-lg',
      regular: 'px-4 py-2 rounded-lg text-sm',
      small: 'px-3 py-1 rounded-md text-sm',
      icon: {
        larger: 'p-4 rounded-lg',
        large: 'p-3 rounded-lg',
        regular: 'p-2 rounded-lg',
        small: 'p-2 rounded-md',
      },
      pagination: 'px-3 py-1 rounded-md text-xs',
    },
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
    primary: {
      base: 'text-darkText bg-primary-600 border border-transparent',
      active: 'active:bg-primary-600 hover:bg-primary-700 focus:ring focus:ring-primary-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base: 'text-neutral-600 border-neutral-300 border dark:text-neutral-400 focus:outline-none',
      active:
        'active:bg-transparent hover:border-neutral-500 focus:border-neutral-500 active:text-neutral-500 focus:ring focus:ring-neutral-300',
      disabled: 'opacity-50 cursor-not-allowed bg-neutral-300',
    },
    link: {
      base: 'text-neutral-600 dark:text-neutral-400 focus:outline-none border border-transparent',
      active:
        'active:bg-transparent hover:bg-neutral-100 focus:ring focus:ring-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-opacity-10',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    dropdownItem: {
      base:
        'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200',
    },
  },
}
