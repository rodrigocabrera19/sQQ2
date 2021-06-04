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
        const newArray = sujetos.filter(sujeto => sujeto !== value);
        setSujetos(newArray);
        
        const arraySujetos = document.querySelectorAll('.item')
        const newArraySujetos = [...arraySujetos]
        setDisplayBtn(newArraySujetos.some((e) => e.classList.contains('item-sujeto')) ? '' : 'none')
        
        if(newArraySujetos.some((e) => e.classList.contains('item-sujeto'))) {
            newArraySujetos.map(item => item.classList.remove('item-sujeto'));
            setDisplayBtn('none')
        }
    };
    
    
    const [displayBtn, setDisplayBtn] = useState('none')

    const sujeteSelected = (value) => {
        
        const itemSujeto = document.getElementById(value);
        if(itemSujeto.classList.contains('item-sujeto')){
                itemSujeto.classList.remove('item-sujeto');
            }else{
                itemSujeto.classList.add('item-sujeto');
            }
            const sujetos = document.querySelectorAll('.item')
            const newArraySujetos = [...sujetos]
            setDisplayBtn(newArraySujetos.some((e) => e.classList.contains('item-sujeto')) ? '' : 'none')
        
    }
    
    const deseleccionar = () => {
        const arraySujetos = document.querySelectorAll('.item');
        const newArraySujetos = [...arraySujetos];
        if(newArraySujetos.some((e) => e.classList.contains('item-sujeto'))) {
            newArraySujetos.map(item => item.classList.remove('item-sujeto'));
            setDisplayBtn('none');
        }
    } 

    const eliminarSeleccionados = () => {
        const arraySujetos = document.querySelectorAll('.item');
        const newArraySujetos = [...arraySujetos];
        const newArray = newArraySujetos.filter(sujeto => !sujeto.classList.contains('item-sujeto'));

        setSujetos(newArray.map(value => value.id));
        
        if(newArraySujetos.some((e) => e.classList.contains('item-sujeto'))) {
            newArraySujetos.map(item => item.classList.remove('item-sujeto'));
            setDisplayBtn('none')
        }
    }
    
   
    
    const sujetosItems = sujetos.map((value)=> {
        return(
            <div class="item" id={value}>
                <div class="item-container">
                        <div onClick = {() => sujeteSelected(value)}>
                            <img src={alucard} alt="" />
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
                        </div>
                            <div class="btn-div">
                                <a href="#" class="btn-simple">Editar</a>
                                <button 
                                    class="btn-simple" 
                                    onClick={() => {
                                        eliminarSujeto(value);
                                    }}
                                >Eliminar</button>
                            </div>
                        </div>
            </div>
        ) 
    });
      
   

    return (
        <main id="primary" onClick={cerrarMenu}>
            <Title seccion="Sujetos" displayBtn={displayBtn} deseleccionar={deseleccionar} eliminarSeleccionados={eliminarSeleccionados}/>
                
            <section class="content">
                <div class="content-div grid-col4">
                    {sujetosItems}                    
                </div>
            </section>

            
        </main>
        
    )
}

export default Sujeto
