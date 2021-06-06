import React, {useEffect, useState} from 'react';

import './style.css';
import Title from '../Title/Title'
import FormBreadcrumb from '../FormBreadcrumb/FormBreadcrumb';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';

const Reporte = ({menuAbierto, activeMenu}) => {

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

    //Función para cerrar el menú de navegación.
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
        //FORM BOTONES + INPUTS 

        const nxtBtn1 = document.querySelector('.next-btn-step1');
        const nxtBtn2 = document.querySelector('.next-btn-step2');
        const nxtBtn3 = document.querySelector('.next-btn-step3');

        const prevBtn1 = document.querySelector('.prev-btn-step2');
        const prevBtn2 = document.querySelector('.prev-btn-step3');
        const prevBtn3 = document.querySelector('.prev-btn-step4');

        const formStep1 = document.querySelector('.step1');
        const formStep2 = document.querySelector('.step2');
        const formStep3 = document.querySelector('.step3');
        const formStep4 = document.querySelector('.step4');

        const stepLi1 = document.querySelector('.step-li1');
        const stepLi2 = document.querySelector('.step-li2');
        const stepLi3 = document.querySelector('.step-li3');
        const stepLi4 = document.querySelector('.step-li4');



        if(nxtBtn1){

            nxtBtn1.addEventListener('click', function(e){
            e.preventDefault();

            formStep1.style.display = "none";
            formStep2.style.display = "block";
            stepLi1.classList.remove('breadcrumb-active');
            stepLi2.classList.add('breadcrumb-active');
            });
            }



            if(prevBtn1){

            prevBtn1.addEventListener('click', function(e){
                e.preventDefault();
                formStep1.style.display = "block";
                formStep2.style.display = "none";
                stepLi1.classList.add('breadcrumb-active');
                stepLi2.classList.remove('breadcrumb-active');
            });

            }

            if(nxtBtn2){

            nxtBtn2.addEventListener('click', function(x){
                x.preventDefault();
                formStep2.style.display = "none";
                formStep3.style.display = "block";
                stepLi2.classList.remove('breadcrumb-active');
                stepLi3.classList.add('breadcrumb-active');
            });

            }


            if(prevBtn2){
            prevBtn2.addEventListener('click', function(e){
                e.preventDefault();
                formStep2.style.display = "block";
                formStep3.style.display = "none";
                stepLi2.classList.add('breadcrumb-active');
                stepLi3.classList.remove('breadcrumb-active');
            });
            }


        if(nxtBtn3){
            nxtBtn3.addEventListener('click', function(e){
            e.preventDefault();
            formStep3.style.display = "none";
            formStep4.style.display = "block";
            stepLi3.classList.remove('breadcrumb-active');
            stepLi4.classList.add('breadcrumb-active');
            });
        }

        if(prevBtn3){
            prevBtn3.addEventListener('click', function(e){
            e.preventDefault();
            formStep3.style.display = "block";
            formStep4.style.display = "none";
            stepLi3.classList.add('breadcrumb-active');
            stepLi4.classList.remove('breadcrumb-active');
            });
        }

        // INPUTS RADIO AND CHECKBOX PARENT SHADOW

  
  
        let radioInput = document.querySelectorAll('[type=radio]');
        let checkboxInput = document.querySelectorAll('[type=checkbox]');

        radioInput.forEach( (item)=>{
        let parentItem = item.parentItem;

        if(item === 'checked'){
            item.style.color = "red";
        }

        })





        //REPORTE 

        let tipoInstrumento = document.querySelectorAll('.tipoInstrumento');

        tipoInstrumento.forEach( (tInst)=>{

        tInst.addEventListener('click', ()=>{

            let x1 = document.querySelector('#rFinanciero')
            let x2 = document.querySelector('#rContable')
            let x3 = document.querySelector('#rComercial')

            if(x1.checked){
            
            document.querySelector('.tipo-fondo').classList.add('tipo-fondo-show')
            let tFondoShow = document.querySelector('.tipo-fondo-show');
            let tipoFondo = document.querySelectorAll('.tipo-fondo input');

            
            if(tFondoShow){

                    function isChecked() {
                            for (let i = 0; i < tipoFondo.length; i++) {
                                if (tipoFondo[i].checked) 
                                // return true;
                                document.querySelector('.next-btn-step1').style.display = "block"

                            }
                    
                            return false;
                            
                        }

                        isChecked();

                    
            }


            tipoFondo.forEach((tFondo)=>{

                tFondo.addEventListener('click', ()=>{
                let btn = document.querySelector('.next-btn-step1');
                // let x1 = document.querySelector('#rFinanciero')



                if(tFondo.checked){
                console.log('you select at least one ! :D');
                btn.style.display = "block"

                }
                })

                })

            }

        })

        });
    }, [])


    
    return (
            <main id="primary" onClick={cerrarMenu}>

                <section class="content-report">

                    <div class="content-div-report">

                        <FormBreadcrumb />
                              
                        <form class="div-form">

                            <Step1 />

                            <Step2 />

                            <Step3 />

                            <Step4 />

                        </form>


                    </div>

                </section>

            </main>
    )
}

export default Reporte
