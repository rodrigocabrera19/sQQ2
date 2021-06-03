import React, {useState, useEffect, Fragment} from 'react';
import './sujetos.css';
import Title from '../Title/Title'

import alucard from '../../../image/alucard.jpg';

const Sujeto = ({menuAbierto, activeMenu}) => {

    //Al presionar la tecla 'esc' cierrar el menú.
    window.onkeydown = (e)=>{
        if(e.keyCode === 27){
            const menuAdmin = document.querySelector('.admin-menu');
            const burger = document.querySelector('.burger');
            menuAdmin.classList.remove('show-admin');
            burger.classList.remove('burger-close');
            activeMenu(false)
        }
      };
    
    //función para cerrar el menú al hacer click en cualquier parte del body.
    const cerrarMenu = () => {
        if(menuAbierto){
            const menuAdmin = document.querySelector('.admin-menu');
            const burger = document.querySelector('.burger');
            menuAdmin.classList.toggle('show-admin');
            burger.classList.toggle('burger-close');
            activeMenu(false)
       }
    }

    useEffect(() => {
        const sujeto = document.querySelectorAll('.item');
        sujeto.forEach((e, index)=> {
            setTimeout( () => {
            e.className += ' item-anime';
            }, index * 300);
        });
    }, [])


    const [sujetos, setSujetos] = useState(['sujeto1', 'sujeto2', 'sujeto3', 'sujeto4', 'sujeto5', 'sujeto6'])

   
    const eliminarSujeto = (value) => {
        const newArray = sujetos.filter(s => s !== value);
        setSujetos(newArray);
    };
    
    const sujetosItems = sujetos.map((value)=> {
        return(
            <div class="item">
                    <div class="item-container">
                            <img src={alucard} alt=""/>
                            <h4 class="item-name">{value}</h4>
                            <div class="desc">
                                <div>
                                    <p>
                                        <span class="height">3000</span> 
                                        x 
                                        <span class="width">20300</span>
                                    </p>
                                </div>
                                
                            </div>
                            <div class="btn-div">
                                <a href="#" class="btn-simple">Editar</a>
                                <button class="btn-simple" onClick={() => eliminarSujeto(value)}>Eliminar</button>
                            </div>
                        </div>
                </div>
        ) 
    });
      
   

    return (
        <main id="primary" onClick={cerrarMenu}>
            <Title seccion="Sujetos" Display="" />
                
            <section class="content">
                <div class="content-div grid-col4">
                    {sujetosItems}                    
                </div>
            </section>

            
        </main>
        
    )
}

export default Sujeto
