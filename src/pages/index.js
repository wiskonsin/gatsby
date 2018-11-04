import React from "react"
import Layout from "../components/layout.js"
import { Link } from "gatsby"
import styles from "../css/index-css-modules.module.css"
import { css } from "react-emotion"
import { graphql } from "gatsby"



export default ({data}) => (
    <Layout>
      <div>
    <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >Lo más grande es comer</h1>
    
      <p>
      Porque nos gusta comer, <b>comer mucho y bien</b>. ¿Y barato? ¡Por qué no!
      </p>
      <p>
      <p>En <strong>{data.site.siteMetadata.title}</strong> sólo queremos contarte nuestras buenas experiencias gastronómicas, no importa dónde, siempre y cuando acaben con una <strong>buena panzada</strong> y una sonrisa en la boca.</p>
      </p>
      </div>
    <p>¿Por dónde empezar?</p>
    <div  className={styles.goto}>
    <p>Por ejemplo, por <Link to="/articulos/">nuestros artículos.</Link></p>
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