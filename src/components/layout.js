import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1.25rem 1rem` }}>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Aprendiendo Gatsby</title>
                <link rel="canonical" href="https://aprendiendogatsby.com" />
            </Helmet>
  <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>aprendiendogatsby</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Inicio</ListLink>
        <ListLink to="/about/">Sobre mi</ListLink>
        <ListLink to="/contact/">Contacto</ListLink>
        <ListLink to="/articulos/">Artículos</ListLink>
        <ListLink to="/tutorial/">Tutorial</ListLink>
        <ListLink to="/my-files/">Ficheros</ListLink>
      </ul>
    </header>
    {children}
    <footer>
    <ul style={{ listStyle: `none`, float: `center` }}>
        <ListLink to="/">2018</ListLink>
        <ListLink to="/">&copy; www.aprendiendogatsby.com</ListLink>
        <ListLink to="/">Luis Riancho</ListLink>
      </ul>
    </footer>
  </div>
)