import './css/base.css'
import './css/dark-theme.css'
import './css/keyframes.css'
import './css/tipografias.css'
import React, { useState } from 'react'
import NavBar from './components/Nav/NavBar.jsx'
import Sujeto from './components/Main/Sujeto/Sujeto'
import AddSujetos from './components/Main/Sujeto/AddSujetos'
import Reporte from './components/Main/Reporte/Reporte';
import CertificadoForm from './components/Main/CertificadoForm/CertificadoForm';
import Login from './components/Main/Login/Login';


function App() {
  //Estado que establece si el menú está abierto o no.
  const [menuAbierto, setMenuAbierto] = useState(false);

  //Al presionar la tecla 'esc' cierrar el menú.
  window.onkeydown = (e)=>{
    if(e.keyCode === 27){
        const menuAdmin = document.querySelector('.admin-menu');
        const burger = document.querySelector('.burger');
        menuAdmin.classList.remove('show-admin');
        burger.classList.remove('burger-close');
        setMenuAbierto(false)
    }
  };

  
  //Función para cerrar el menú de navegación.
  const cerrarMenu = (bool) => {
    if(menuAbierto){
      const menuAdmin = document.querySelector('.admin-menu');
      const burger = document.querySelector('.burger');
      menuAdmin.classList.toggle('show-admin');
      burger.classList.toggle('burger-close');
      setMenuAbierto(bool);
    }else{
      setMenuAbierto(bool);
    }
  }
  
  
  return (
    <div className="App">
      <NavBar 
        cerrarMenu={cerrarMenu}
        menuAbierto={menuAbierto}
      />
      <Reporte 
        cerrarMenu={cerrarMenu}
      />
    </div>
  );
}

export default App;
