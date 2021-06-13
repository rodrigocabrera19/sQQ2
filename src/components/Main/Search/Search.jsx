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
            <div class="searchbar H-group" onClick={cerrarMenu}>
                
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
                <div class="searchIcon" onClick={animateSearch}>
                            
                    <span>
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                                <rect x="39.7392" y="25.3918" width="20.2456" height="20.2435" transform="rotate(135 39.7392 25.3918)" stroke="#18F4FF"/>
                            <g filter="url(#filter1_d)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5639 27.0808C28.9474 25.467 28.875 23.0344 27.3469 21.5063C25.7429 19.9022 23.1422 19.9022 21.5382 21.5063C19.9341 23.1103 19.9341 25.711 21.5382 27.315C23.0658 28.8426 25.4972 28.9154 27.111 27.5335L29.0839 29.5064L29.5367 29.0535L27.5639 27.0808ZM26.8892 21.9636C28.2407 23.3151 28.2407 25.5062 26.8892 26.8576C25.5378 28.2091 23.3466 28.2091 21.9952 26.8576C20.6437 25.5062 20.6437 23.3151 21.9952 21.9636C23.3466 20.6122 25.5378 20.6122 26.8892 21.9636Z" fill="#18F4FF"/>
                            <path d="M27.5639 27.0808L27.3741 26.918L27.2234 27.0938L27.3871 27.2575L27.5639 27.0808ZM27.111 27.5335L27.2877 27.3567L27.1241 27.1931L26.9484 27.3436L27.111 27.5335ZM29.0839 29.5064L28.9071 29.6831L29.0839 29.8599L29.2606 29.6831L29.0839 29.5064ZM29.5367 29.0535L29.7135 29.2303L29.8903 29.0535L29.7135 28.8768L29.5367 29.0535ZM27.7537 27.2435C29.2215 25.5313 29.1449 22.9507 27.5237 21.3295L27.1701 21.683C28.6052 23.1181 28.6732 25.4027 27.3741 26.918L27.7537 27.2435ZM27.5237 21.3295C25.822 19.6278 23.0631 19.6278 21.3614 21.3295L21.7149 21.683C23.2214 20.1766 25.6637 20.1766 27.1701 21.683L27.5237 21.3295ZM21.3614 21.3295C19.6597 23.0312 19.6597 25.7901 21.3614 27.4918L21.7149 27.1382C20.2085 25.6318 20.2085 23.1895 21.7149 21.683L21.3614 21.3295ZM21.3614 27.4918C22.982 29.1124 25.5614 29.1896 27.2736 27.7234L26.9484 27.3436C25.433 28.6413 23.1495 28.5728 21.7149 27.1382L21.3614 27.4918ZM29.2606 29.3296L27.2877 27.3567L26.9342 27.7102L28.9071 29.6831L29.2606 29.3296ZM29.3599 28.8768L28.9071 29.3296L29.2606 29.6831L29.7135 29.2303L29.3599 28.8768ZM27.3871 27.2575L29.3599 29.2303L29.7135 28.8768L27.7407 26.904L27.3871 27.2575ZM27.066 27.0344C28.5151 25.5853 28.5151 23.2359 27.066 21.7868L26.7124 22.1404C27.9662 23.3942 27.9662 25.427 26.7124 26.6808L27.066 27.0344ZM21.8184 27.0344C23.2675 28.4835 25.6169 28.4835 27.066 27.0344L26.7124 26.6808C25.4586 27.9347 23.4258 27.9347 22.172 26.6808L21.8184 27.0344ZM21.8184 21.7868C20.3693 23.2359 20.3693 25.5853 21.8184 27.0344L22.172 26.6808C20.9182 25.427 20.9182 23.3942 22.172 22.1404L21.8184 21.7868ZM27.066 21.7868C25.6169 20.3378 23.2675 20.3378 21.8184 21.7868L22.172 22.1404C23.4258 20.8866 25.4586 20.8866 26.7124 22.1404L27.066 21.7868Z" fill="#18F4FF"/>
                            </g>
                            </g>
                            <defs>
                                <filter id="filter0_d" x="0.402344" y="0.370483" width="50.0443" height="50.0443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.956863 0 0 0 0 1 0 0 0 0.45 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                <filter id="filter1_d" x="3.28027" y="3.24829" width="44.2888" height="44.2888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="7.5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.701961 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                            </defs>
                        </svg>       
                    </span>

                </div>
                
                

            </div>
        )
}

export default Search
