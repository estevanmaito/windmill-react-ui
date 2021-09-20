import React from 'react'

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(function Table(props, ref) {
  const { children, ...other } = props
  return (
    <table className="w-full overflow-auto whitespace-nowrap" ref={ref} {...other}>
      {children}
    </table>
  )
})

export default Table
