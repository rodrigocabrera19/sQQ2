import React from 'react';
import './NavBar.css'
import Menu from './Menu/Menu.jsx'
import AdminMenu from './Menu/AdminMenu'


const NavBar = ({menuAbierto, activeMenu}) => {

    
    return (
        <header>
            
            <nav >
                <Menu menuAbierto={menuAbierto} activeMenu={activeMenu}/>

                <ul className="nav-links">
                    <li>
                        <a href="#DatosPersonales">Datos Personales</a>
                    </li>
                    
                    <li>
                        <a href="#CerrarSesion">Cerrar Sesión</a>
                    </li>
                    
                    <li>
                        <a href="#" class="new-user">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <path d="M38.0234 44.8675L18.5881 44.8675L8.87046 28.036L18.5881 11.2046L38.0234 11.2046L47.741 28.036L38.0234 44.8675Z" stroke="white"/>
                                <path d="M37.1359 43.3282L19.478 43.3282L10.6491 28.036L19.478 12.7438L37.1359 12.7438L45.9649 28.036L37.1359 43.3282Z" stroke="white" stroke-width="0.2"/>
                                <circle cx="27.9168" cy="22.7495" r="5.05153" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6808 29.0605C29.8347 29.4316 28.8996 29.6376 27.9165 29.6376C26.1554 29.6376 24.5486 28.9767 23.3307 27.8894C21.5744 29.5417 20.3709 32.1185 20.1472 35.0674C20.1054 35.6181 20.5571 36.0667 21.1094 36.0667H32.142C30.9511 34.8998 30.2123 33.2734 30.2123 31.4745C30.2123 30.6207 30.3787 29.8058 30.6808 29.0605Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7232 36.0672C38.2594 36.0672 40.3155 34.0111 40.3155 31.4749C40.3155 28.9386 38.2594 26.8826 35.7232 26.8826C33.1869 26.8826 31.1309 28.9386 31.1309 31.4749C31.1309 34.0111 33.1869 36.0672 35.7232 36.0672ZM35.7227 35.5571C37.9771 35.5571 39.8047 33.7295 39.8047 31.4751C39.8047 29.2207 37.9771 27.3931 35.7227 27.3931C33.4682 27.3931 31.6406 29.2207 31.6406 31.4751C31.6406 33.7295 33.4682 35.5571 35.7227 35.5571Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3242 30.8443L33.3242 32.2584L35.0917 32.2584L35.0917 34.0259L36.5058 34.0259L36.5058 32.2584L38.2733 32.2584L38.2733 30.8443L36.5058 30.8443L36.5058 29.0768L35.0917 29.0768L35.0917 30.8443L33.3242 30.8443Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d" x="6.29297" y="8.70459" width="48.0252" height="42.6629" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="2" dy="2"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                                        
                        </a>
                    </li>
                </ul>

                <AdminMenu />

            </nav>
        </header>
    )
}

export default NavBar
