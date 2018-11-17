---
title: "ReactJS II"
date: "2018-11-11"
---

Acceder a datos anidados

Creamos una clase nueva, llamada Hearts:
```

import React from 'react'

class Hearts extends React.Component{
    render(){
        return <Button>I <Heart /> React</Button>
    }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {

    render(){
        return <span>&hearts;</span>
    }
}

export default Hearts
```

En donde se puede ver cómo dentro del componente Button, creado después, estamos metiendo un componente de la clase Heart, 
que se ha creado posteriormente también.

Button, mediante {props.children} hereda las propiedades de sus childrenº

------

Crear validación de las propiedades del componente, de manera que de un error (por consola) si no se cumplen
En el ejemplo, el título tiene una longitud de 4, menor que 5, por lo que la consola muestra un error
```

import React from 'react';

class Validation extends React.Component{
    render(){
        return <Title text='Hola'/>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`falta ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} es demasiado corto`)
        }
    }
}

export default Validation
```

----------------

Systema de eventos en React. Podemos escuchar lo que se realiza en el navegador y en base a ello realizar una serie de acciones.

El método update es un método creado por nosotros
```

import React from 'react'

class Events extends React.Component{
    constructor(){
        super();
        this.state={currentEvent:'---'}
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({currentEvent: e.type})
    }
    render(){
        return(
        <div>

        <textarea 
        cols="30" 
        rows="10"
        onKeyPress = {this.update}
        onBlur = {this.update}
        onTouchStart = {this.update}
        onTouchEnd = {this.update}
        onFocus = {this.update}
        onCut = {this.update}
        onCopy = {this.update}
        onPaste = {this.update}
        onDoubleClick = {this.update}
        onTouchMove = {this.update}
        onTouchEnd = {this.update}
        />
        <h1>{this.state.currentEvent}</h1>

        </div>
        )
    }
}

export default Events;
```

---------

Referencias a componentes (útil si queremos actualizar diferentes componentes del mismo tipo)

