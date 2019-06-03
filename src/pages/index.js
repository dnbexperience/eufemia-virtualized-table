import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import TableExample from '../components/TableExample'

const IndexPage = () => (
  <Layout>
    <h1 className="dnb-h1">Eufemia Virtualized Table Example</h1>
    <p className="dnb-p">Welcome to this Eufemia Example.</p>
    <Link to="/page-2/" className="dnb-anchor">
      Go to page 2
    </Link>
    <br />
    <br />
    <TableExample />
  </Layout>
)

export default IndexPage
