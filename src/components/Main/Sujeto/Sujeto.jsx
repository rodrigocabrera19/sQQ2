import React, {useState, useEffect, Fragment} from 'react';
import './style.css'

import alucard from '../../../image/alucard.jpg';
import Title from '../Title/Title'

const Content = ({menuAbierto, activeMenu}) => {
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


const [sujeto, setSujeto] = useState(['sujeto1', 'sujeto2', 'sujeto3', 'sujeto4', 'sujeto5', 'sujeto6'])

const eliminarSujeto = (value) => {
       const newArray = sujeto.filter(s => s !== value);
       setSujeto(newArray);
   }
    
    const sujetos = sujeto.map((value)=> {
        return(
        <div class="content w-full">
            <div class="item w-full flex flex-col">
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
                                <div class="H-group">
                                    <h6 class="gray-color">Fecha de creación: <span>&nbsp;</span></h6>
                                    <p>May 16, 2020</p>
                                </div>
                            </div>
                            <div class="btn-div flex justify-around">
                                <a href="#" class="btn-simple">Editar</a>
                                <a href="#" class="btn-simple lg:mx-3">Ver</a>
                                <a href="#" class="btn-simple" onClick={() => eliminarSujeto(value)}>Eliminar</a>
                            </div>
                        </div>
                    </div>
                </div>
                )
        })
   
   

    return (
        <Fragment>
            <main id="primary" onClick={cerrarMenu}>
                <Title seccion="Sujetos" menuAbierto={menuAbierto} activeMenu={activeMenu}/>
                <div className=" mt-10 div-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-3" onClick={cerrarMenu}>
                
                    {sujetos}
                </div>
            </main>
        </Fragment>
        
    )
}

export default Content
