import React from "react"
import Layout from "../components/layout.js"
import { Link } from "gatsby"
import styles from "../css/index-css-modules.module.css"
import { css } from "react-emotion"
import { graphql } from "gatsby"
import CssStyles from "../css/index-css-modules.module.css"


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
      <p>En <strong>{data.site.siteMetadata.title}</strong> sólo queremos contarte nuestras buenas experiencias gastronómicas, no importa dónde, siempre y cuando acaben con una <strong>buena panzada</strong> y una sonrisa en la boca.</p>
      </div>
    <p>¿Por dónde empezar?</p>
    <div  className={styles.goto}>
    <p>Por ejemplo, por <Link to="/articulos/">nuestros artículos.</Link></p>
    </div>
    <div class="dropdown">
  <button class="btn" type="button" id={CssStyles.dropdownMenu2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Artículos
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Lugares</button>
    <button class="dropdown-item" type="button">En Casa</button>
  </ul>
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