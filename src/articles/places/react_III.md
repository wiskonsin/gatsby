---
title: "ReactJS III"
date: "2018-11-17"
---

Cuando nuestro componente se incluye en el DOM -> Mounted
Cuando sale del DOM -> UnMounted
```

import React from 'react'
import ReactDOM from 'react-dom'

//Importamos React y ReactDOM

class MountUnmount extends React.Component{
    constructor(){
    super();
    this.state = {val:0}
    this.update = this.update.bind(this)
    }
    // en cada update, sumamos 1 al state
    update(){
        this.setState({val: this.state.val + 1})
    }
    //Mostramos por consola cuando el componente se va a montar
    componentWillMount(){
        console.log('componentWillMount');
    }
    //Mostramos por consola cuando se renderiza y cada vez que lo haga mostramos el valor de state
    render(){
        console.log('render');
        return <button onClick={this.update}>{this.state.val}</button>
    }
    //mostramos por consola cuándo se ha montado el componente
    componentDidMount(){
        console.log('componentDidMount')
    }
    //mostramos por consola cuándo se ha desmontado el componente
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
}

//Creamos una nueva clase Wrapper que contendrá MountUnmount

class Wrapper extends React.Component{
    mount(){
        //Cuando llamemos al método mount(), mostramos el elemento por pantalla
        ReactDOM.render(<MountUnmount />, document.getElementById('a'))
    }
    unmount(){
        //Cuando llamemos al método unmount(), desmontamos el elemento (también se restauran valores)
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    
    render(){
        // Creamos 2 botones iniciales, uno para montar y otro para desmontar
        // Hay un div vacío que es donde montaremos el MountUnmount component
        return(
        <div>
            <button onClick={this.mount.bind(this)}>Mount</button>
            <button onClick={this.unmount.bind(this)}>Unmount</button>
            <div id="a"></div>
        </div>
        )    
    }
}

export default Wrapper
```
