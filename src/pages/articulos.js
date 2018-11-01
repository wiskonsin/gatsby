import React from "react"
import { graphql } from "gatsby"
import { css } from "react-emotion"
import Layout from "../components/layout"
import { Link } from "gatsby"


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Artículos
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span
                className={css`
                  color: #e51937;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            <p><Link to={node.fields.slug}>Leer Más</Link></p>
          </div>
        ))
        }
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields{
            slug
          			}
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`