import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout/layout.component"

import BlogStyles from "./blog.module.scss"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol className={BlogStyles.posts}>
        {posts.allMarkdownRemark.edges.map(edge => (
          <li>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h3>{edge.node.frontmatter.title}</h3>
            </Link>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
