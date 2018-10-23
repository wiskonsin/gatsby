---
title: "Datos GraphQL"
date: "2018-10-24"
---

Datos Interesantes GraphQL

Siguiendo el tutorial de HowToGraphQL

Siguiendo el tutorial de GraphQL (https://graphql.org/learn/) y HowToGraphQL (https://www.howtographql.com/basics/0-introduction/) vamos a tener en cuenta una serie de conceptos.

El primero, ¿qué función tiene una API? En pocas palabras, definir cómo un cliente obtiene información de un servidor.

En el caso de las API REST convencionales, no se particularizan los datos que el cliente recibe del servidor, es decir, el cliente recibe toda la información y es en su lado en dónde se selecciona el contenido que se quiere manejar. 

Esta solución es totalmente válida, y lo seguirá siendo, aunque hoy en día la cantidad de datos que se manejan es mucho mayor que cuando se crearon este tipo de soluciones, lo que nos hará perder eficiencia y fluidez en nuestras peticiones al servidor.

Con GraphQL el cliente selecciona únicamente la información que desea recibir en todo momento (no toda de golpe), por lo que mejoraremos sensiblemente el rendimiento de nuestro sitio, sobre todo cuando tratemos de manejar grandes cantidades de datos.
