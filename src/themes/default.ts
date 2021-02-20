export default {
  // Alert
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5',
    withClose: 'pr-12',
    success: 'bg-green-50 text-green-900 dark:bg-green-600 dark:text-white',
    danger: 'bg-red-50 text-red-900 dark:bg-red-600 dark:text-white',
    warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-600 dark:text-white',
    neutral: 'bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    info: 'bg-blue-50 text-blue-900 dark:bg-blue-600 dark:text-white',
    icon: {
      base: 'h-5 w-5',
      success: 'text-green-400 dark:text-green-300',
      danger: 'text-red-400 dark:text-red-300',
      warning: 'text-yellow-400 dark:text-yellow-100',
      neutral: 'text-gray-400 dark:text-gray-500',
      info: 'text-blue-400 dark:text-blue-300',
    },
  },
  // Pagination
  pagination: {
    base: 'flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400',
  },
  // TableFooter
  tableFooter: {
    base:
      'px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800',
  },
  // TableRow
  tableRow: {
    base: '',
  },
  // TableHeader
  tableHeader: {
    base:
      'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800',
  },
  // TableContainer
  tableContainer: {
    base: 'w-full overflow-hidden rounded-lg shadow-xs',
  },
  // TableCell
  tableCell: {
    base: 'px-4 py-3',
  },
  // TableBody
  tableBody: {
    base:
      'bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400',
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: 'mb-2 last:mb-0',
  },
  // Dropdown
  dropdown: {
    base:
      'absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700',
    align: {
      left: 'left-0',
      right: 'right-0',
    },
  },
  // Avatar
  avatar: {
    base: 'relative rounded-full inline-block',
    size: {
      large: 'w-10 h-10',
      regular: 'w-8 h-8',
      small: 'w-6 h-6',
    },
  },
  // Modal
  modal: {
    base:
      'w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl',
  },
  // ModalBody
  modalBody: {
    base: 'mb-6 text-sm text-gray-700 dark:text-gray-400',
  },
  // ModalFooter
  modalFooter: {
    base:
      'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800',
  },
  // ModalHeader
  modalHeader: {
    base: 'mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300',
  },
  // Badge
  badge: {
    base: 'inline-flex px-2 text-xs font-medium leading-5 rounded-full',
    success: 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
    danger: 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700',
    warning: 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600',
    neutral: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
    primary: 'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600',
  },
  // Backdrop
  backdrop: {
    base:
      'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center',
  },
  // Textarea
  textarea: {
    base: 'block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none',
    active:
      'focus:border-purple-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:shadow-outline-gray focus:shadow-outline-purple',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red',
  },
  // Select
  select: {
    base: 'block w-full text-sm dark:text-gray-300 focus:outline-none',
    active:
      'focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600',
    select: 'form-select leading-5',
    multiple: 'form-multiselect',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red',
  },
  // Label
  label: {
    base: 'block text-sm text-gray-700 dark:text-gray-400',
    // check and radio get this same style
    check: 'inline-flex items-center',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  // Input
  input: {
    base: 'block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5',
    active:
      'focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red',
    radio:
      'text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray',
    checkbox:
      'text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray',
  },
  // HelperText
  helperText: {
    base: 'text-xs',
    valid: 'text-green-600 dark:text-green-400',
    invalid: 'text-red-600 dark:text-red-400',
  },
  // Card
  card: {
    base: 'min-w-0 rounded-lg shadow-xs overflow-hidden',
    default: 'bg-white dark:bg-gray-800',
  },
  cardBody: {
    base: 'p-4',
  },
  // Button
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
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
    primary: {
      base: 'text-white bg-purple-600 border border-transparent',
      active: 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base: 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
      active:
        'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray',
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
    },
    link: {
      base: 'text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent',
      active:
        'active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    custom: {
      base: 'text-pink-600 dark:text-pink-400',
      active:
        'active:bg-transparent hover:bg-pink-100 dark:hover:bg-pink-500 dark:hover:text-pink-300',
      disabled: 'opacity-50 cursor-not-allowed bg-pink-300',
    },
    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base:
        'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200',
    },
  },
}
