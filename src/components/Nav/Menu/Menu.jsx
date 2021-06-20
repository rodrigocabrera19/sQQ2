import React, {useState} from 'react';

const Menu = ({cerrarMenu, menuAbierto}) => {
    
    //función que desplega y esconde el menu.
    const desplegarMenu = () => {
        cerrarMenu(!menuAbierto);
        const burger = document.querySelector('.burger');
        const menuAdmin = document.querySelector('.admin-menu');
        menuAdmin.classList.toggle('show-admin');
        burger.classList.toggle('burger-close');

    }

    return (
        <div class="main-menubar">
            <div class="burger" onClick={desplegarMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
    
            <div class="i-bar i-bar1 i-bar-menubar"></div>
    
            <h1 class="logo">Chrislugica</h1>
        </div>
        
    )
}

export default Menu
