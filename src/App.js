import './css/base2.css'
import './css/dark-theme.css'
import './css/keyframes.css'
import './css/tipografias.css'
import React, {useState} from 'react'
import NavBar from './components/Nav/NavBar.jsx'
import Sujeto from './components/Main/Sujeto/Sujeto'
import AddSujetos from './components/Main/Sujeto/AddSujetos'
import Reporte from './components/Main/Reporte/Reporte';
import CertificadoForm from './components/Main/CertificadoForm/CertificadoForm';


function App() {
  //Estado que establece si el menú está abierto o no.
  const [menuAbierto, setMenuAbierto] = useState(false);

  //función que actualiza el estado del menú. El estado del menú permite cerrarlo haciendo click en cualquier parte del body.
  const activeMenu = (active) => {
    setMenuAbierto(active)
  }
  
  return (
    <div className="App">
      <NavBar menuAbierto={menuAbierto} activeMenu={activeMenu}/>
      <CertificadoForm menuAbierto={menuAbierto} activeMenu={activeMenu}/>
    </div>
  );
}

export default App;
