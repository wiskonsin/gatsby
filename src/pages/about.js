import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

export default ({ data }) => (
    <Layout>
  <div>
    <h2>Sobre mi</h2>
    <p>Soy un Ingeniero de Telecomunicaciones al que le encantan los nuevos retos. Uno de ellos ha sido crear <strong>{data.site.siteMetadata.title}</strong>, en donde me gustaría compartir mi experiencia con esta maravillosa herramienta.</p>
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