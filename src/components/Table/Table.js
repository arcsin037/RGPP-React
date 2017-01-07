import React, { PropTypes } from 'react'

export const Table = props => {
  const tableHeaders = props.headers.map((header, index) => (<th key={`header_${index}`}>{header}</th>))
  const tableData = props.data.map((d, index) => <tr key={`data_${index}`}>{d.map((i, index) => <td key={`td_${index}`}>{i}</td>)}</tr>)
  return (
    <table className='table'>
      <thead>
        <tr>
          {tableHeaders}
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
}

export default Table
