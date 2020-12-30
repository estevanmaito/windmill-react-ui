import React from 'react'

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, Props>(function Table(props, ref) {
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
