import React from 'react'
import PropTypes from 'prop-types'

const Table = React.forwardRef(function Table(props, ref) {
  const { children, ...other } = props
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-no-wrap" ref={ref} {...other}>
        {children}
      </table>
    </div>
  )
})

Table.propTypes = {
  children: PropTypes.node,
}

export default Table
