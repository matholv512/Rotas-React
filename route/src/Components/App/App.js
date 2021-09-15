import React from 'react'
import './App.css';
/*Colocar os imports das paginas aqui*/
import Header from '../Header/Header.jsx'
import Fiat from '../Fiat/Fiat.jsx'
import Ford from '../Ford/Ford.jsx'
import Chevrolet from '../Chevrolet/Chevrolet.jsx'
import Vw from '../Vw/Vw.jsx'
import Hyundai from '../Hyundai/Hyundai.jsx'
import BrasiliaHeader from '../Vw/BrasiliaHeader'
import MecanicaHeader from '../Vw/MecanicaHeader'

import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Header />
      
      <main>
        <Switch>

          <Route exatch path = "/fiat" render = {(props) => <Fiat/>}></Route> 
          <Route exatch path = "/ford" render = {(props) => <Ford/>}></Route>
          <Route exatch path = "/chevrolet" render = {(props) => <Chevrolet/>}></Route>
          <Route exatch path = "/vw" render = {(props) => <Vw/>}></Route>
          <Route exatch path = "/hyundai" render = {(props) => <Hyundai/>}></Route>
          <Route exatch path = "/brasiliaheader" render = {(props) => <BrasiliaHeader/>}></Route>
          <Route exatch path = "/mecanicaheader" render = {(props) => <MecanicaHeader/>}></Route>
        </Switch>

      </main>

    </div>
  );
}

export default App;
