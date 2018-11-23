---
title: "JavaScript"
date: "2018-11-23"
---

Cosas interesantes de JS

Creación de nodos para el DOM y animación guay

```
// Creamos variables con los elementos

var encabezado = document.createElement("h1"),
    subtitulo = document.createElement("h2"),
    parrafo = document.createElement("p");

// Creamos el contenido que asignaremos a cada elemento

var contenidoEnc = document.createTextNode("Bienvenido a JS"),
    contenidoSub = document.createTextNode("Probando DOM"),
    contenidoPar = document.createTextNode("Haciendo pruebas también en el párrafo");

// Añadimos los contenidos a cada elemento

encabezado.appendChild(contenidoEnc);
subtitulo.appendChild(contenidoSub);
parrafo.appendChild(contenidoPar);

// Añadimos atributos a cada elemento

encabezado.setAttribute("align","center");
subtitulo.setAttribute("align","center");
parrafo.setAttribute("align","center");

// Añadimos los elementos al body

document.body.appendChild(encabezado);
document.body.appendChild(subtitulo);
document.body.appendChild(parrafo);

// Asignamos IDs a cada elemento

encabezado.setAttribute("id","encabezado");
subtitulo.setAttribute("id","subtitulo");
parrafo.setAttribute("id","parrafo");

console.log(document.getElementById("encabezado"));
console.log(document.getElementById("subtitulo"));
console.log(document.getElementById("parrafo"));

// creo una lista desordenada (ul)

var ulist = document.createElement("ul");
ulist.setAttribute("id","lista");

var texto_lista;

// La lleno con varios puntos

for(var i = 0;i<=10;i++){
    var componente_lista = document.createElement("li");
    texto_lista = document.createTextNode("Este es el componente nº "+i);
    componente_lista.appendChild(texto_lista);
    componente_lista.setAttribute("id","elemento"+i);
    componente_lista.setAttribute("align","center");
    ulist.appendChild(componente_lista);
}

// Modifico estilos del body

document.body.style.width = '720px';
document.body.style.paddingLeft = '33%';

// añado lista al dom
document.body.appendChild(ulist);

// busco el elemento 7 para después borrarlo
var elemento_a_borrar = document.getElementById("elemento7");
console.log("Vamos a borrar: "+elemento_a_borrar);
//ulist.removeChild(elemento_a_borrar);

encabezado.animate([
    // keyframes
    { transform: 'translateY(-50px)' }, 
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-50px)' }, 
  ], { 
    // timing options
    duration: 3000,
    iterations: Infinity
  });

  subtitulo.animate([
    // keyframes
    { transform: 'translateX(-100px)' }, 
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-100px)' }, 
  ], { 
    // timing options
    duration: 3000,
    iterations: Infinity
  });
  parrafo.animate([
    // keyframes
    { transform: 'translateX(100px)' }, 
    { transform: 'translateX(0px)' },
    { transform: 'translateX(100px)' }, 
  ], { 
    // timing options
    duration: 3000,
    iterations: Infinity
  });

  nlistado = document.getElementsByTagName("li").length;


  for(var i = 0; i<nlistado; i++){

      elemento = document.getElementById("elemento"+i);
      elemento.animate([
        // keyframes
        { transform: 'translateX(100px)' }, 
        { transform: 'translateX(0px)' },
        { transform: 'translateX(80px)' },
        { transform: 'translateX(0px)' },
        { transform: 'translateX(60px)' },
        { transform: 'translateX(0px)' },
        { transform: 'translateX(40px)' },
        { transform: 'translateX(0px)' },
        { transform: 'translateX(20px)' },
        { transform: 'translateX(0px)' },
      ], { 
        // timing options
        duration: 1000+(i*250),
        iterations: 1
      });
  }

```
