import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import Ads from "../components/ads.js"
import CssStyles from "../css/index-css-modules.module.css"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1.25rem 1rem` }}>
  <Helmet>
                <meta charSet="utf-8" />
                <title>La GordoPedia</title>
                <link rel="canonical" href="https://lagordopedia.com" />
            </Helmet>
  <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>LaGordoPedia</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Inicio</ListLink>
        <ListLink to="/articulos/">
  <button class="btn" type="button" id={CssStyles.dropdownMenu2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Artículos
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button"><ListLink to="/places/">Lugares</ListLink></button>
    <button class="dropdown-item" type="button"><ListLink to="/home/">En Casa</ListLink></button>
  </ul>
</ListLink>
<ListLink to="/about/">Sobre mi</ListLink>
        
      </ul>
    </header>
    {children}
    <footer>
    <Ads  client="ca-pub-0852379507006503" slot="5926986707" format="auto" responsive="true"></Ads>
    <ul style={{ listStyle: `none`, float: `center` }}>
        <ListLink to="/">2018</ListLink>
        <ListLink to="/">&copy; www.lagordopedia.com</ListLink>
        <ListLink to="/">Luis Riancho</ListLink>
      </ul>
    </footer>
  </div>
)