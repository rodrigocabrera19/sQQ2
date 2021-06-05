import React from 'react';
import './search.css';



const Search = ({menuAbierto, activeMenu, setingDisplay, deseleccionar, display}) => {

//Función que despliega el input del buscador.
    const animateSearch = () => {
        const searchIcon = document.querySelector('.searchIcon');
        const searchBar = document.querySelector('.searchinput');
        searchIcon.classList.toggle('btn-opacity');
        searchBar.classList.toggle('searchinput-show');

        const añadirIcon =document.querySelector('.añadirIcon');
        const deleteIcon =document.querySelector('.deleteIcon');
        deleteIcon.classList.toggle('deleteIcon2');
        añadirIcon.classList.toggle('añadirIcon2');
        setingDisplay('none');
        deseleccionar();
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
            <div class="searchbar H-group" onClick={cerrarMenu} style={{display:display}}>
                
                <div class="añadirIcon ">
                    <span className="search">
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                                    <rect x="39.7392" y="25.0266" width="20.2456" height="20.2435" transform="rotate(135 39.7392 25.0266)" stroke="#00FFB3"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.392 23.3912L20.392 26.233L23.9443 26.233L23.9443 26.4501L20.6488 26.4501L20.6488 26.5199H23.9443L23.9443 29.7852L26.7861 29.7852V26.5199H29.9144L29.9144 26.4501L26.7861 26.4501V26.233H30.3384L30.3384 23.3912H27.0446L27.0446 20.2854L26.9748 20.2854L26.9748 23.3912H26.7861L26.7861 19.8389L23.9443 19.8389L23.9443 23.3912L20.392 23.3912ZM20.99 23.2025L20.99 23.1327L23.6337 23.1327L23.6337 21.8605L23.7035 21.8605L23.7035 23.1327L23.7035 23.2008L23.7035 23.2025L20.99 23.2025Z" fill="#00FFB3"/>
                                    </g>
                            <defs>
                            <filter id="filter0_d" x="0.402344" y="0.00524902" width="50.0443" height="50.0443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.701961 0 0 0 0.45 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </span>
                </div>
                

                
                <div class="deleteIcon ">
                            
                    <span >
                                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d)">
                                    <rect x="39.6718" y="25.1554" width="20.2456" height="20.2435" transform="rotate(135 39.6718 25.1554)" stroke="#F55018"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7695 27.6574L22.779 29.6669L25.2908 27.1551L25.4444 27.3086L23.1143 29.6387L23.1636 29.688L25.4937 27.3579L27.8027 29.6669L29.8121 27.6574L27.5031 25.3485L29.7154 23.1362L29.666 23.0869L27.4538 25.2991L27.3003 25.1456L29.8121 22.6338L27.8027 20.6243L25.4732 22.9538L23.2767 20.7573L23.2274 20.8066L25.4239 23.0031L25.2908 23.1362L22.779 20.6243L20.7695 22.6338L23.2814 25.1456L20.7695 27.6574ZM21.0588 27.1011L21.0095 27.0518L22.8789 25.1824L21.9792 24.2827L22.0285 24.2334L22.9282 25.1331L22.9763 25.1811L22.9775 25.1824L21.0588 27.1011Z" fill="#F55018"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d" x="0.334961" y="0.134033" width="50.0443" height="50.0443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.796078 0 0 0 0 0.0196078 0 0 0 0 0.258824 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </span>

                </div>
                
                <input type="text" name="" id="search" class="searchinput"/>
                
                <div  onClick={animateSearch}>
                
                    <span>
                        
                       
                    </span>
                    
                </div>
                

            </div>
        )
}

export default Search
