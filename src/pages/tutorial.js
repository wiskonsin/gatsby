import React from "react"
import Layout from "../components/layout.js"
import { css } from "react-emotion"

export default () => (
    <Layout>
  <div>
  <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >Tutorial</h1>
    <p>Antes de comenzar, destacar que podéis encontrar toda la documentación en la web oficial de <a href="https://www.gatsbyjs.org/">Gatsby</a>. Pese a ser un proyecto relativamente nuevo (vio la luz en Junio de 2017), su documentación es bastante extensa y muy clara.</p>
  </div>
  </Layout>
)