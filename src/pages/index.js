import React from "react"
import Layout from "../components/layout.js"
import { Link } from "gatsby"
import styles from "../css/index-css-modules.module.css"


export default () => (
    <Layout>
    <h1>Crear un sitio web nunca fue tan fácil</h1>
    <div>
      <p>
      <a href="https://www.gatsbyjs.org/">Gatsby</a> es un generador de webs <b>progresivo</b> que facilita el desarrollo de nuestra web.
      </p>
      <p>
      En pocos minutos te sorprenderá ya que se obtienen <b>resultados</b> increíbles.
      </p>
      <p>
      Podemos usar <b>Hemingway</b> para mejorar legibilidad.
      </p>
      </div>
    <p>¿Quieres comenzar nuestro tutorial en castellano?</p>
    <div  className={styles.goto}>
    <Link to="/tutorial/">Haz click aquí</Link>
    </div>
    </Layout>
)