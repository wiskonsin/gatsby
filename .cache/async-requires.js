// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/Luigi/gatsby/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/Luigi/gatsby/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/Users/Luigi/gatsby/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-articulos-js": () => import("/Users/Luigi/gatsby/src/pages/articulos.js" /* webpackChunkName: "component---src-pages-articulos-js" */),
  "component---src-pages-contact-js": () => import("/Users/Luigi/gatsby/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/Luigi/gatsby/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-listado-js": () => import("/Users/Luigi/gatsby/src/pages/listado.js" /* webpackChunkName: "component---src-pages-listado-js" */),
  "component---src-pages-my-files-js": () => import("/Users/Luigi/gatsby/src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */),
  "component---src-pages-tutorial-js": () => import("/Users/Luigi/gatsby/src/pages/tutorial.js" /* webpackChunkName: "component---src-pages-tutorial-js" */)
}

exports.data = () => import("/Users/Luigi/gatsby/.cache/data.json")

