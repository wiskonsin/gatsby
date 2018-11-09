---
title: "ReactJS"
date: "2018-11-09"
---

enlaces interesantes: https://gallardoramos.com/porque-aprender-reactjs-y-por-donde-empezar/
https://egghead.io/lessons/react-use-create-react-app-to-setup-a-simple-react-app

npm -i create-react-app -g
create-react-app react-app
(tarda un par de minutos)
cd react-app
(abrimos editor)
npm start

En el editor. Borramos todo de src salvo App.js e index.js

Y en public dejamos sólo index.html y dejamos el fichero así:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">

    <title>React App</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>

En App.js

diferentes formas de crear un componente React, (están comentadas 2/3)

import React from 'react';

/* Se puede crear con la clase
  class App extends React.Component {
    render(){
      //se puede crear así directamente, pero mejor con createElement  
      //return <h1>Hola mundo</h1>

      return React.createElement('h1',null,'Hola Luis')
    }
}
*/

/* O se puede crear con un const */

const App = () => <h1>Hola chavales</h1>

export default App
