// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/Luigi/gatsby/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Luigi/gatsby/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Luigi/gatsby/src/pages/about.js")),
  "component---src-pages-articulos-js": preferDefault(require("/Users/Luigi/gatsby/src/pages/articulos.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Luigi/gatsby/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Luigi/gatsby/src/pages/index.js")),
  "component---src-pages-listado-js": preferDefault(require("/Users/Luigi/gatsby/src/pages/listado.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/Luigi/gatsby/src/pages/my-files.js")),
  "component---src-pages-tutorial-js": preferDefault(require("/Users/Luigi/gatsby/src/pages/tutorial.js"))
}

