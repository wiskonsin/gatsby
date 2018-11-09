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

----

Para poder exportar varios elementos, hay que meterlos en un wrap correctamente.

Ejemplo, esto no funciona:

class App extends Component {
  render() {
    return (
        <h1>Hola Luis</h1> <b>Bold</b>
    );
  }
}

Pero esto sí:

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola Luis</h1> <b>Bold</b>
        </div>
    );
  }
}

----

Podemos enviar información a través de las propiedades de los componentes. De esta forma, desde index.js, si realizamos lo siguiente:

ReactDOM.render(
<App txt="este texto se corresponde a la propiedad txt"/>, document.getElementById('root')
                );
                
A continuación, en App.js, dentro de la clase:

<p>{this.props.txt}</p>

Incluso, si antes del return, hacemos un let txt = this.props.txt y a continuación sustituimos el contenido del paragraph por {txt}, el resultado es el mismo

----

//definimos un objeto con las propiedades. Las propiedades son colecciones de valores que pasamos a los componentes, cuyo valor es estático

(importamos primero prop-types)

import PropTypes from 'prop-types';

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

// definimos el valor por defecto de txt

App.defaultProps = {
  txt: "soy luis"
}

------------

// State -> para poder definir valores de forma dinámica dentro de un componente

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(){
    super(); // para poder usar "this"
    // en state creamos valores por defecto de las propiedades
    this.state={
      txt: "este es el estado por defecto",
      cat: "<-"
    }

  }
  // creamos este método para que, dentro del input,cuando se produzca un cambio, actualice el valor de txt
  update (e){
    this.setState({txt: e.target.value});
  }
  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>Hola Luis</h1> 
        <b>Bold</b>
        <p>{txt}</p>
        <input type="text" onChange={this.update.bind(this)}></input>
        <p>{this.state.txt} {this.state.cat}</p>
        </div>
    );
  }
}

//definimos un objeto con las propiedades

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

//definimos el valor por defecto de la propiedad txt del objeto

App.defaultProps = {
  txt: "soy luis"
}

export default App;

-----

Una cualidad importante de react es que permite que un componente renderice otro componente

En el siguiente ejemplo se ve cómo se puede crear un componente widget, añadir todos los que se quiera y ver cómo renderiza el resultado debidamente

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(){
    super(); // para poder usar "this"
    // en state creamos valores por defecto de las propiedades
    this.state={
      txt: "este es el estado por defecto",
      cat: "<-"
    }

  }
  // creamos este método para que, dentro del input,cuando se produzca un cambio, actualice el valor de txt
  update (e){
    this.setState({txt: e.target.value});
  }
  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>{this.state.txt} </h1> 
        <b>Bold</b>
        <p>{txt}</p>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <p>{this.state.txt} {this.state.cat}</p>
        </div>
    );
  }
}

// definimos un nuevo componente llamado Widget

const Widget = (props) => 
  <input type="text" onChange={props.update}></input>

//definimos un objeto con las propiedades

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

//definimos el valor por defecto de la propiedad txt del objeto

App.defaultProps = {
  txt: "soy luis"
}

export default App;
