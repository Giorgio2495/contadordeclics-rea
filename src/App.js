import React from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reinicarContador = this.reinicarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics +1 }));
  }

  reinicarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
    return (
      <div className="App">
       <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt='Logo de freCodeCamp'/>
       </div>
       <div className='contenedor-principal'>
        <Contador numClics={this.state.numClics}/>
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={this.manejarClic}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={this.reinicarContador}/>
       </div>
      </div>
    );
  }
}

export default App;
