import React from 'react'
import PropTypes from 'prop-types'

function Table({ children }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-no-wrap">{children}</table>
    </div>
  )
}

Table.propTypes = {
  children: PropTypes.node,
}

export default Table
