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
---

Controlar las actualizaciones del componente dependiendo de las propiedades recibidas

```

import React from 'react'
import ReactDOM from 'react-dom'

class Updates extends React.Component{
    
    constructor(){
        super();
        this.state = {increasing: false}
    }
    
    update(){
        ReactDOM.render(
            <Updates val={this.props.val+1} />,
            document.getElementById('root')
        )
    }
    //Con esta función podemos comprobar el valor que va a recibir el componente en sus propiedades
    componentWillReceiveProps(nextProps){
        this.setState({increasing: nextProps.val > this.props.val})
    }
    //Esta función hace que el componente sólo se actualice cuando queramos.
    //En este caso comprobamos si el valor es múltiplo de 5
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.val % 5 === 0
    }
    //Esta función se activa cuando el componente se ha actualizado y en este caso utilizamos los valores previos de las propiedades
    componentDidUpdate(prevProps,prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }
    render(){
        console.log(this.state.increasing)

        return(
            <button onClick={this.update.bind(this)}>
            {this.props.val}
            </button>
        )
    }
}

Updates.defaultProps = {val:0}
export default Updates
--------
```
Extrayendo info de una API


```

import React from 'react'

class ArrayAPI extends React.Component{
    constructor(){
        super();
        //creamos array vacío
        this.state = {items: []}
    }
    // El componente se montará con
    componentWillMount(){
        //descargo info de la api de Star Wars (people)
        fetch('https://swapi.co/api/people/?format=json')
        .then(response => response.json())
        .then( ({results: items}) => this.setState({items}))
    }
    render(){
        // Almacenamos los datos en el array
        let items = this.state.items
        
        return(
            <div>
                {items.map(item=><h4 key="{item.name}">{item.name}</h4>)}
            </div>
        )
    }

}

export default ArrayAPI


```
