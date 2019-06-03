import React from 'react'
import { ColumnSizer, Column, Table } from 'react-virtualized'

import './TableExample.css'
// import 'react-virtualized/styles.css' // only needs to be imported once

export default () => {
  const numColumns = 2
  const rowCount = list.length
  const totalWidth = 600
  return (
    <>
      <ColumnSizer
        columnMinWidth={50}
        columnMaxWidth={400}
        columnCount={numColumns}
        width={totalWidth}
      >
        {({ columnWidth }) => {
          return (
            <Table
              width={totalWidth}
              height={300}
              headerHeight={80}
              rowHeight={64}
              rowCount={rowCount}
              rowGetter={({ index }) => list[index]}
              className="dnb-table"
              headerClassName="dnb-table-th"
              rowClassName={rowClassName}
            >
              <Column
                width={columnWidth}
                label="Name"
                dataKey="name"
                className="dnb-table-td"
              />
              <Column
                width={columnWidth}
                label="Description"
                dataKey="description"
                className="dnb-table-td"
              />
            </Table>
          )
        }}
      </ColumnSizer>
    </>
  )
}

const rowClassName = ({ index }) => {
  if (index < 0) {
    return 'dnb-table-tr'
  }
  return index % 2 === 0
    ? 'dnb-table-tr dnb-table-tr--odd'
    : 'dnb-table-tr dnb-table-tr--even'
}

// Table data as an array of objects
const list = [
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' },
  { name: 'First Column', description: 'Second Column' }
  // And so on...
]
