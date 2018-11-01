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
        >Contacto</h1>
    <p>Para cualquier duda o sugerencia no dudes en enviarme un email a <span><a href="mailto:luisriancho@gmail.com">luisriancho@gmail.com</a></span>
    </p>
  </div>
  </Layout>
)