import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"
import { css } from "react-emotion"


export default ({ data }) => (
    <Layout>
  <div>
    <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >Sobre mi</h1>
    <p>Si algo se me da bien en esta vida es comer, y por ello me gustaría compartir con todxs vosotrxs mis experiencias en <strong>{data.site.siteMetadata.title}</strong>.</p>
    <p>Espero que disfrutéis con esta web, al menos tanto como yo lo he hecho creándola.
      </p>
  </div>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`