import React, {useEffect, useState} from 'react';
import './search.css';



const Search = ({menuAbierto, activeMenu, display}) => {

//Función que despliega el input del buscador.
    const animateSearch = () => {
        const searchIcon = document.querySelector('.search-icon');
        const searchBar = document.querySelector('.searchinput');
        searchIcon.classList.toggle('btn-opacity');
        searchBar.classList.toggle('searchinput-show');
    }

     const cerrarMenu = () => {
      if(menuAbierto){
          const menuAdmin = document.querySelector('.admin-menu');
          const burger = document.querySelector('.burger');
          menuAdmin.classList.toggle('show-admin');
          burger.classList.toggle('burger-close');
          activeMenu(false)
     }
    }
   
    return (
    

       
            <div class="searchbar H-group" style={{display: display}}>
                
                <input type="text" name="" id="search" class="searchinput"/>
                <label for="search" class="btn-search">
                    <div class="search-icon" onClick={animateSearch}>
                        <span></span>
                    </div>
                </label>

            </div>
            
       
    )
}

export default Search
