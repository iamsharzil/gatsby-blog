import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout.component"

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Index Page</h1>
      <Link to="/blog">Blog Page</Link>
    </Layout>
  )
}

export default IndexPage
