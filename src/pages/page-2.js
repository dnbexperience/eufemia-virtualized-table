import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const SecondPage = () => (
  <Layout>
    <h1 className="dnb-h1">Hi from the second static page</h1>
    <p className="dnb-p">Welcome to page 2</p>
    <Link to="/" className="dnb-anchor">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
