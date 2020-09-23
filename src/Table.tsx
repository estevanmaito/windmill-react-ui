import React from 'react'

interface Props {
  children: React.ReactNode
}

type Ref = HTMLTableElement

const Table = React.forwardRef<Ref, Props>(function Table(props, ref) {
  const { children, ...other } = props
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-no-wrap" ref={ref} {...other}>
        {children}
      </table>
    </div>
  )
})

export default Table
