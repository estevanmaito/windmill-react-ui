export default {
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5',
    withClose: 'pr-12',
    success: 'bg-wm-success-50 text-wm-success-900 dark:bg-wm-success-600 dark:text-wm-darkText',
    danger: 'bg-wm-danger-50 text-wm-danger-900 dark:bg-wm-danger-600 dark:text-wm-darkText',
    warning: 'bg-wm-warning-50 text-wm-warning-900 dark:bg-wm-warning-600 dark:text-wm-darkText',
    neutral: 'bg-wm-neutral-50 text-wm-neutral-800 dark:bg-wm-neutral-700 dark:text-wm-neutral-300',
    info: 'bg-wm-info-50 text-wm-info-900 dark:bg-wm-info-600 dark:text-wm-darkText',
    icon: {
      base: 'h-5 w-5',
      success: 'text-wm-success-400 dark:text-wm-success-300',
      danger: 'text-wm-danger-400 dark:text-wm-danger-300',
      warning: 'text-wm-warning-400 dark:text-wm-warning-100',
      neutral: 'text-wm-neutral-400 dark:text-wm-neutral-500',
      info: 'text-wm-info-400 dark:text-wm-info-300',
    },
  },
  pagination: {
    base:
      'flex flex-col justify-between text-xs sm:flex-row text-wm-neutral-600 dark:text-wm-neutral-400',
  },
  tableFooter: {
    base:
      'px-4 py-3 border-t dark:border-wm-neutral-700 bg-wm-neutral-50 text-wm-neutral-500 dark:text-wm-neutral-400 dark:bg-wm-neutral-800',
  },
  tableRow: { base: '' },
  tableHeader: {
    base:
      'text-xs font-semibold tracking-wide text-left text-wm-neutral-500 uppercase border-b dark:border-wm-neutral-700 bg-wm-neutral-50 dark:text-wm-neutral-400 dark:bg-wm-neutral-800',
  },
  tableContainer: { base: 'w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5' },
  tableCell: { base: 'px-4 py-3' },
  tableBody: {
    base:
      'bg-wm-darkText divide-y dark:divide-wm-neutral-700 dark:bg-wm-neutral-800 text-wm-neutral-700 dark:text-wm-neutral-400',
  },
  dropdownItem: { base: 'mb-2 last:mb-0' },
  dropdown: {
    base:
      'absolute w-56 p-2 mt-2 text-wm-neutral-600 bg-wm-darkText border border-wm-neutral-100 rounded-lg shadow-md min-w-max-content dark:text-wm-neutral-300 dark:border-wm-neutral-700 dark:bg-wm-neutral-700',
    align: { left: 'left-0', right: 'right-0' },
  },
  avatar: {
    base: 'relative rounded-full inline-block',
    size: { large: 'w-10 h-10', regular: 'w-8 h-8', small: 'w-6 h-6' },
  },
  modal: {
    base:
      'w-full px-6 py-4 overflow-hidden bg-wm-darkText rounded-t-lg dark:bg-wm-neutral-800 sm:rounded-lg sm:m-4 sm:max-w-xl',
  },
  modalBody: { base: 'mb-6 text-sm text-wm-neutral-700 dark:text-wm-neutral-400' },
  modalFooter: {
    base:
      'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-wm-neutral-50 dark:bg-wm-neutral-800',
  },
  modalHeader: {
    base: 'mt-4 mb-2 text-lg font-semibold text-wm-neutral-700 dark:text-wm-neutral-300',
  },
  badge: {
    base: 'inline-flex px-2 text-xs font-medium leading-5 rounded-full',
    success:
      'text-wm-success-700 bg-wm-success-100 dark:bg-wm-success-700 dark:text-wm-success-100',
    danger: 'text-wm-danger-700 bg-wm-danger-100 dark:text-wm-danger-100 dark:bg-wm-danger-700',
    warning:
      'text-wm-darkWarning-700 bg-wm-darkWarning-100 dark:text-wm-darkText dark:bg-wm-darkWarning-600',
    neutral:
      'text-wm-neutral-700 bg-wm-neutral-100 dark:text-wm-neutral-100 dark:bg-wm-neutral-700',
    primary: 'text-wm-primary-700 bg-wm-primary-100 dark:text-wm-darkText dark:bg-wm-primary-600',
  },
  backdrop: {
    base:
      'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center',
  },
  textarea: {
    base: 'block w-full text-sm dark:text-wm-neutral-300 rounded-md focus:outline-none',
    active:
      'focus:border-wm-primary-400 border-wm-neutral-300 dark:border-wm-neutral-600 dark:focus:border-wm-neutral-600 dark:bg-wm-neutral-700 dark:focus:ring-wm-neutral-300 focus:ring focus:ring-wm-primary-300',
    disabled: 'cursor-not-allowed opacity-50 bg-wm-neutral-300 dark:bg-wm-neutral-800',
    valid:
      'border-wm-success-600 dark:bg-wm-neutral-700 focus:border-wm-success-400 dark:focus:border-wm-success-400 focus:ring focus:ring-wm-success-200 dark:focus:ring-wm-success-200',
    invalid:
      'border-wm-danger-600 dark:bg-wm-neutral-700 focus:border-wm-danger-400 dark:focus:border-wm-danger-400 focus:ring focus:ring-wm-danger-200 dark:focus:ring-wm-danger-200',
  },
  select: {
    base: 'block w-full text-sm dark:text-wm-neutral-300 focus:outline-none rounded-md',
    active:
      'focus:border-wm-primary-400 border-wm-neutral-300 dark:border-wm-neutral-600 dark:bg-wm-neutral-700 focus:ring focus:ring-wm-primary-300 dark:focus:ring-wm-neutral-300 dark:focus:border-wm-neutral-600',
    select: 'leading-5',
    disabled: 'cursor-not-allowed opacity-50 bg-wm-neutral-300 dark:bg-wm-neutral-800',
    valid:
      'border-wm-success-600 dark:bg-wm-neutral-700 focus:border-wm-success-400 dark:focus:border-wm-success-400 focus:ring focus:ring-wm-success-200 dark:focus:ring-wm-success-200',
    invalid:
      'border-wm-danger-600 dark:bg-wm-neutral-700 focus:border-wm-danger-400 dark:focus:border-wm-danger-400 focus:ring focus:ring-wm-danger-200 dark:focus:ring-wm-danger-200',
  },
  label: {
    base: 'block text-sm text-wm-neutral-700 dark:text-wm-neutral-400',
    check: 'inline-flex items-center',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  input: {
    base: 'block w-full text-sm focus:outline-none dark:text-wm-neutral-300 leading-5 rounded-md',
    active:
      'focus:border-wm-primary-400 border-wm-neutral-300 dark:border-wm-neutral-600 focus:ring focus:ring-wm-primary-300 dark:focus:border-wm-neutral-600 dark:focus:ring-wm-neutral-300 dark:bg-wm-neutral-700',
    disabled: 'cursor-not-allowed opacity-50 bg-wm-neutral-300 dark:bg-wm-neutral-800',
    valid:
      'border-wm-success-600 dark:bg-wm-neutral-700 focus:border-wm-success-400 dark:focus:border-wm-success-400 focus:ring focus:ring-wm-success-200 dark:focus:ring-wm-success-200',
    invalid:
      'border-wm-danger-600 dark:bg-wm-neutral-700 focus:border-wm-danger-400 dark:focus:border-wm-danger-400 focus:ring focus:ring-wm-danger-200 dark:focus:ring-wm-danger-200',
    radio:
      'text-wm-primary-600 form-radio focus:border-wm-primary-400 focus:outline-none focus:ring focus:ring-wm-primary-300 focus:ring-offset-0 dark:focus:ring-wm-neutral-300',
    checkbox:
      'text-wm-primary-600 form-checkbox focus:border-wm-primary-400 focus:outline-none focus:ring focus:ring-wm-primary-300 focus:ring-offset-0 rounded dark:focus:ring-wm-neutral-300',
  },
  helperText: {
    base: 'text-xs',
    valid: 'text-wm-success-600 dark:text-wm-success-400',
    invalid: 'text-wm-danger-600 dark:text-wm-danger-400',
  },
  card: {
    base: 'min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden',
    default: 'bg-wm-darkText dark:bg-wm-neutral-800',
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
      base: 'text-wm-darkText bg-wm-primary-600 border border-transparent',
      active:
        'active:bg-wm-primary-600 hover:bg-wm-primary-700 focus:ring focus:ring-wm-primary-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base:
        'text-wm-neutral-600 border-wm-neutral-300 border dark:text-wm-neutral-400 focus:outline-none',
      active:
        'active:bg-transparent hover:border-wm-neutral-500 focus:border-wm-neutral-500 active:text-wm-neutral-500 focus:ring focus:ring-wm-neutral-300',
      disabled: 'opacity-50 cursor-not-allowed bg-wm-neutral-300',
    },
    link: {
      base:
        'text-wm-neutral-600 dark:text-wm-neutral-400 focus:outline-none border border-transparent',
      active:
        'active:bg-transparent hover:bg-wm-neutral-100 focus:ring focus:ring-wm-neutral-300 dark:hover:bg-wm-neutral-500 dark:hover:text-wm-neutral-300 dark:hover:bg-opacity-10',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    dropdownItem: {
      base:
        'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-wm-neutral-100 hover:text-wm-neutral-800 dark:hover:bg-wm-neutral-800 dark:hover:text-wm-neutral-200',
    },
  },
}
