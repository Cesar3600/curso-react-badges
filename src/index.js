
// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// import './global.css';
// import App from './components/App';

// const container = document.getElementById('app');

// ReactDOM.render(<App />, container);



////////////////////////////////////////////////////
// const app = document.getElementById('app')

// const elemento = document.createElement('h1')
// elemento.innerText = 'hola mundo!'
// app.appendChild(elemento)

////////////////////////////////////////////////////

//como react

import React from 'react'
import {render} from 'react-dom'
import Badge from './components/badge'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

//const mensaje= <h1>Hola desde React!!!</h1>
const ubicacion = document.getElementById('app')

render(<Badge/>,ubicacion)

