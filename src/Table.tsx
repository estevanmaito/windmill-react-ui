import React from 'react'

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(function Table(props, ref) {
  const { children, ...other } = props
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-nowrap" ref={ref} {...other}>
        {children}
      </table>
    </div>
  )
})

export default Table
