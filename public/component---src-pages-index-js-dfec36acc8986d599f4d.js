(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),r=n.n(a),o=n(158),i=n(154),l=n(156),s=n.n(l),c=n(159);t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("h1",{className:Object(c.a)("display:inline-block;border-bottom:1px solid;")},"Lo más grande es comer"),r.a.createElement("p",null,"Porque nos gusta comer, ",r.a.createElement("b",null,"comer mucho y bien"),". ¿Y barato? ¡Por qué no!"),r.a.createElement("p",null,"En ",r.a.createElement("strong",null,t.site.siteMetadata.title)," sólo queremos contarte nuestras buenas experiencias gastronómicas, no importa dónde, siempre y cuando acaben con una ",r.a.createElement("strong",null,"buena panzada")," y una sonrisa en la boca.")),r.a.createElement("p",null,"¿Por dónde empezar?"),r.a.createElement("div",{className:s.a.goto},r.a.createElement("p",null,"Por ejemplo, por ",r.a.createElement(i.Link,{to:"/articulos/"},"nuestros artículos."))))};var u="1097489062"},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(152),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(153),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(48),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){e.exports={goto:"index-css-modules-module--goto--1GFBo",dropdownMenu2:"index-css-modules-module--dropdownMenu2--2l3fZ"}},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(154),i=n(160),l=function(e){var t=e.client,n=e.format,a=e.slot,o=e.responsive,i=void 0===o?"auto":o;return r.a.createElement("div",null,r.a.createElement("ins",{className:"adsbygoogle",data_ad_client:t,data_ad_slot:a,data_ad_format:n,data_full_width_responsive:i}))},s=n(156),c=n.n(s),u=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(o.Link,{to:e.to},e.children))};t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"1.25rem 1rem"}},r.a.createElement(i.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"La GordoPedia"),r.a.createElement("link",{rel:"canonical",href:"https://lagordopedia.com"})),r.a.createElement("header",{style:{marginBottom:"1.5rem"}},r.a.createElement(o.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},r.a.createElement("h3",{style:{display:"inline"}},"LaGordoPedia")),r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(u,{to:"/"},"Inicio"),r.a.createElement(u,{to:"/articulos/"},r.a.createElement("button",{class:"btn",type:"button",id:c.a.dropdownMenu2,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Artículos"),r.a.createElement("ul",{class:"dropdown-menu","aria-labelledby":"dropdownMenu2"},r.a.createElement("button",{class:"dropdown-item",type:"button"},r.a.createElement(u,{to:"/places/"},"Lugares")),r.a.createElement("button",{class:"dropdown-item",type:"button"},r.a.createElement(u,{to:"/home/"},"En Casa")))),r.a.createElement(u,{to:"/about/"},"Sobre mi"))),t,r.a.createElement("footer",null,r.a.createElement(l,{client:"ca-pub-0852379507006503",slot:"5926986707",format:"auto",responsive:"true"}),r.a.createElement("ul",{style:{listStyle:"none",float:"center"}},r.a.createElement(u,{to:"/"},"2018"),r.a.createElement(u,{to:"/"},"© www.lagordopedia.com"),r.a.createElement(u,{to:"/"},"Luis Riancho"))))}},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(78),i=n(4),l=n.n(i),s=n(49),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,u=Object(s.a)(c.test.bind(c));var d,p="__EMOTION_THEMING__",m=((d={})[p]=l.a.object,d);var f=u,h=function(e){return"theme"!==e&&"innerRef"!==e},g=function(){return!0},y=function(e,t){for(var n=2,a=arguments.length;n<a;n++){var r=arguments[n],o=void 0;for(o in r)e(o)&&(t[o]=r[o])}return t};var v=function(e,t){var n=function(a,r){var o,i,l,s;void 0!==r&&(o=r.e,i=r.label,l=r.target,s=a.__emotion_forwardProp&&r.shouldForwardProp?function(e){return a.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var c=a.__emotion_real===a,u=void 0===o&&c&&a.__emotion_base||a;return"function"!=typeof s&&(s="string"==typeof u&&u.charAt(0)===u.charAt(0).toLowerCase()?f:h),function(){var d=arguments,f=c&&void 0!==a.__emotion_styles?a.__emotion_styles.slice(0):[];if(void 0!==i&&f.push("label:"+i+";"),void 0===o)if(null==d[0]||void 0===d[0].raw)f.push.apply(f,d);else{f.push(d[0][0]);for(var h=d.length,v=1;v<h;v++)f.push(d[v],d[0][v])}var b=function(n){var a,r;function i(){return n.apply(this,arguments)||this}r=n,(a=i).prototype=Object.create(r.prototype),a.prototype.constructor=a,a.__proto__=r;var c=i.prototype;return c.componentWillMount=function(){void 0!==this.context[p]&&(this.unsubscribe=this.context[p].subscribe(function(e){this.setState({theme:e})}.bind(this)))},c.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[p].unsubscribe(this.unsubscribe)},c.render=function(){var n=this.props,a=this.state;this.mergedProps=y(g,{},n,{theme:null!==a&&a.theme||n.theme||{}});var r="",i=[];return n.className&&(r+=void 0===o?e.getRegisteredStyles(i,n.className):n.className+" "),r+=void 0===o?e.css.apply(this,f.concat(i)):o,void 0!==l&&(r+=" "+l),t.createElement(u,y(s,{},n,{className:r,ref:n.innerRef}))},i}(t.Component);return b.displayName=void 0!==i?i:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",void 0!==a.defaultProps&&(b.defaultProps=a.defaultProps),b.contextTypes=m,b.__emotion_styles=f,b.__emotion_base=u,b.__emotion_real=b,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+l}}),b.withComponent=function(e,t){return n(e,void 0!==t?y(g,{},r,t):r).apply(void 0,f)},b}};return n};n.d(t,"a",function(){return o.css});v(o,r.a)}}]);
//# sourceMappingURL=component---src-pages-index-js-dfec36acc8986d599f4d.js.map