import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

export default ({ data }) => (
    <Layout>
  <div>
    <h2>Sobre mi</h2>
    <p>Soy un desarrollador amateur al que le encantan los nuevos retos. Uno de ellos ha sido crear <strong>{data.site.siteMetadata.title}</strong>, espero que os sirva.</p>
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