import React from "react"
import Layout from "../components/layout.js"
import { Link } from "gatsby"
import styles from "../css/index-css-modules.module.css"


export default () => (
    <Layout>
    <h1>Crear un sitio web nunca fue tan fácil</h1>
    <div>
      <p>
      <a href="https://www.gatsbyjs.org/">Gatsby</a> es un generador de aplicaciones web progresivo, que nos facilitará mucho el desarrollo de nuestro sitio web.
      </p>
      <p>
          En pocos minutos te sorprenderá, ya que se obtienen resultados increíbles casi de manera inmediata.
        </p>
      </div>
    <p>¿Quieres comenzar nuestro tutorial en castellano?</p>
    <div  className={styles.goto}>
    <Link to="/tutorial/">Haz click aquí</Link>
    </div>
    </Layout>
)