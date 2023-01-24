import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reinicarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img 
      className='freecodecamp-logo' 
      src={freeCodeCampLogo}
      alt='Logo de freCodeCamp'/>
     </div>
     <div className='contenedor-principal'>
      <Contador numClics={numClics}/>
      <Boton 
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic}/>
      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reinicarContador}/>
     </div>
    </div>
  );
}

export default App;
