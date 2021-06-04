import React, {Fragment, useEffect, useState} from 'react';
import alucard from '../../../image/alucard.jpg';
import './style.css';
import FormBreadcrumb from '../FormBreadcrumb/FormBreadcrumb';

const Reporte = ({menuAbierto, activeMenu}) => {

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

    const itemReport = document.querySelectorAll('.item-report');

        itemReport.forEach((item) =>{
            item.addEventListener('click', function(e){
                item.classList.toggle('selected-item');
            });
        });
        
}, [])


const [checking, setChecking] = useState()
//Función que comprueba si hay algún checkbox activado. De ser así, devuelve true y lo guarda en el estado 'checking'.
const check = () => {
    var c1 = Array.from(document.getElementsByClassName("check")).filter(cur => cur.type === 'checkbox' && cur.checked).length > 0;
    setChecking(c1)
}

//Función hook que comprueba si hay un checkbox activado, de ser así muestra el botón siguiente, de lo contrario lo oculta.
useEffect(() => {
    checking ? document.querySelector('.next-btn-step1').style.display = "block" : document.querySelector('.next-btn-step1').style.display = "none"
    
}, [checking])

//Estado que guarda true o false según si el usuario seleccionó o no una carta. El mismo sirve para permitir el acceso o no a la sección 'selecionado'.
const [selectedActive, setSelectedActive] = useState(null);
//Función para verificar si el usuario seleccionó una carta en la sección 'choose' .De ser así, se le permite acceder al apartado 'seleccionado'.
const selected = () => {
    const itemReport = document.querySelectorAll('.item-report');
    const item = [];
    for(let i = 0; i < itemReport.length; i++) {
        item.push(itemReport[i])
    }

    setSelectedActive(item.some(value => value.classList.contains('selected-item')))  
}


    return (
        <Fragment>
            <main id="primary" onClick={cerrarMenu}>

                

                <section class="content">

                    

                        <div class="content-div">

                            <FormBreadcrumb />
                                



                            <form class="div-form">

                                <div class="step-from step1">

                                    <h4 class="form-title">Set Report</h4>


                                        <div class="boxForm1">

                                            <div class="input-box1 input-box V-group">

                                                <h6 class="subtitle-form mb2">Tipo de instrumento</h6>

                                                <div class="H-group no-wrap">
                                                    <div class="input-form select-group">
                                                        <input class="tipoInstrumento" type="radio" name="tipoInstrumento" id="rFinanciero" value="rFinanciero"/>
                                                        <label for="rFinanciero" class="label-cp label-radio">Financiero</label>
                                                    </div>
                        
                                                    <div class="input-form select-group">
                                                        <input class="tipoInstrumento" type="radio" name="tipoInstrumento" id="rContable" value="rContable" />
                                                        <label for="rContable" class="label-cp label-radio">Contable</label>
                                                    </div>

                                                    <div class="input-form select-group">
                                                        <input class="tipoInstrumento" type="radio" name="tipoInstrumento" id="rComercial" value="rComercial" disabled/>
                                                        <label for="rComercial" class="label-cp label-radio">Comercial</label>
                                                    </div>
                        
                                                </div>
                    
                                                
                                                <div class="V-group mt4 tipo-fondo">

                                                <div>
                                                    <h6 class="subtitle-form mb2">Tipo de fondo</h6>

                                                    <div class="H-group no-wrap">
                                                        <div class="input-form select-group">
                                                            <input type="checkbox" className="check" name="tipoFondo" id="FondoIndexado" onClick={check}/>
                                                            <label for="FondoIndexado" class="label-cp label-checkbox">Fondo indexado</label>
                                                        </div>

                                                        <div class="input-form select-group">
                                                            <input type="checkbox" className="check" name="tipoFondo" id="FondoAnexado" onClick={check}/>
                                                            <label for="FondoAnexado" class="label-cp label-checkbox">Fondo Anexado</label>
                                                        </div>

                                                        <div class="input-form select-group">
                                                            <input type="checkbox" className="check" name="tipoFondo" id="FondoFinanciero" onClick={check}/>
                                                            <label for="FondoFinanciero" class="label-cp label-checkbox">Fondo Financiero</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                </div>

                                            </div>

                                        </div>


                                        <div class="button-div H-group">

                                            <button 
                                                type="submit" 
                                                class="next-btn btn next-btn-step1" 
                                                style={{display: "none"}}
                                                
                                                >siguiente</button>

                                        </div>

                                    </div>





                                    <div class="step-from step2" style={{display: "none"}}>


                                        <h4 class="form-title">Choose Pieces</h4>

                                        <div class="filter">

                                            
                                                
                                            </div>

                                            <div class="filter-tabs H-group">

                                                <div class="tabs H-group">
                                                    <div class="tab all-tab active-tab">
                                                        <button type="button">
                                                            Todo
                                                        </button>
                                                    </div>
                                                    <div class="tab selected-tab">
                                                        {
                                                            selectedActive === true ? 
                                                                <button type="button">
                                                                    Seleccionado
                                                                </button> 
                                                                :
                                                                <button type="button" disabled>
                                                                    Seleccionado
                                                                </button>
                                                        }
                                                        
                                                    </div>
                                                </div>


                                                <div class="filter-container grid-col6">
                                                

                                                    <div class="item-report" >
                                                        <div class="item-container" onClick={selected}>
                                                            <img src={alucard} alt=""/>
                                                            <div class="H-group">
                                                                <h4 class="item-name">CSDVR1</h4>
                                                            </div>
                                                        </div>


                                                        <div class="desc-item-report">

                                                            <div class="H-group">
                                                                <h5>Tipo de activo</h5>
                                                                <p class="tipo de activo"></p>
                                                            </div>
                                                            <div class="H-group">
                                                                <h5>
                                                                    Medidas
                                                                </h5>
                                                                <p>
                                                                    <span class="height">height</span> x <span class="width">width</span>
                                                                </p>
                                                            </div>
                                                            <div class="H-group">
                                                                <h5>
                                                                    Peso
                                                                </h5>
                                                                <p>
                                                                    <span class="weight">height</span> kb
                                                                </p>
                                                            </div>
                                                            <div class="valor">
                                                                <h5>Precio</h5>
                                                                <p class="price"></p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    
                                                    <div class="item-report" onClick={selected}>
                                                        <div class="item-container">
                                                            <img src={alucard} alt=""/>
                                                            <h4 class="item-name">CSDVR2</h4>
                                                        </div>

                                                        <div class="desc-item-report">

                                                            <div class="H-group">
                                                                <h5>Tipo de activo</h5>
                                                                <p class="tipo de activo"></p>
                                                            </div>
                                                            <div class="H-group">
                                                                <h5>
                                                                    Medidas
                                                                </h5>
                                                                <p>
                                                                    <span class="height">height</span> x <span class="width">width</span>
                                                                </p>
                                                            </div>
                                                            <div class="H-group">
                                                                <h5>
                                                                    Peso
                                                                </h5>
                                                                <p>
                                                                    <span class="weight">height</span> kb
                                                                </p>
                                                            </div>
                                                            <div class="valor">
                                                                <h5>Precio</h5>
                                                                <p class="price"></p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="item-report" onClick={selected}>
                                                        <div class="item-container">
                                                            <img src={alucard} alt=""/>
                                                            <h4 class="item-name">CSDVR3</h4>
                                                        </div>

                                                        <div class="desc-item-report">

                                                            <div class="H-group">
                                                                <h5>Tipo de activo</h5>
                                                                <p class="tipo de activo"></p>
                                                            </div>
                                                            <div class="H-group">
                                                                <h5>
                                                                    Medidas
                                                                </h5>
                                                                <p>
                                                                    <span class="height">height</span> x <span class="width">width</span>
                                                                </p>
                                                            </div>
                                                            <div class="H-group">
                                                                <h5>
                                                                    Peso
                                                                </h5>
                                                                <p>
                                                                    <span class="weight">height</span> kb
                                                                </p>
                                                            </div>
                                                            <div class="valor">
                                                                <h5>Precio</h5>
                                                                <p class="price"></p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="item-report" onClick={selected}>
                                                        <div class="item-container">
                                                            <img src={alucard} alt=""/>
                                                            <h4 class="item-name">CSDVR4</h4>
                                                        </div>
                                                    </div>
                                                    <div class="item-report" onClick={selected}>
                                                        <div class="item-container">
                                                            <img src={alucard} alt=""/>
                                                            <h4 class="item-name">CSDVR4</h4>
                                                        </div>
                                                    </div>
                                                    <div class="item-report" onClick={selected}>
                                                        <div class="item-container">
                                                            <img src={alucard} alt=""/>
                                                            <h4 class="item-name">CSDVR4</h4>
                                                        </div>
                                                    </div>
                                                    <div class="item-report" onClick={selected}>
                                                        <div class="item-container">
                                                            <img src={alucard} alt=""/>
                                                            <h4 class="item-name">CSDVR4</h4>
                                                        </div>
                                                    </div>
                                                    <div class="item-report" onClick={selected}>
                                                        <div class="item-container">
                                                            <img src={alucard} alt=""/>
                                                            <h4 class="item-name">CSDVR4</h4>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>




                                                <div class="button-div H-group">

                                                    <button type="button" class="prev-btn btn prev-btn-step2">Anterior</button>

                                                    <button type="submit" class="next-btn btn next-btn-step2">siguiente</button>

                                                </div>


                                            </div>




                                            <div class="step-from step3" style={{display: "none"}}>

                                                <h4 class="form-title">Setting Fund</h4>
                    
                                                    <div class="">
                                                        
                                                        <div class="input-box2 V-group">
                                                            
                                                            <div class="H-group center2 mt4">
                                                                <div class="input-form flex1 no-wrap V-group">
                                                                    <label for="titulo">Título</label>
                                                                    <input type="text" name="titulo" id="titulo"/>
                                                                </div>

                                                                <div class="input-form V-group .no-wrap flex1">
                                                                    
                                                                    <label for="year">Año</label>
                                                                    <input type="number" name="year" id="year" value="0"/>
                                                                </div>
                    
                                                                <div class="input-form V-group .no-wrap flex1">
                                                                    <label for="generacion">Generación</label>
                                                                    <input type="number" name="generacion" id="generacion"/>
                                                                </div>
                                                            </div>

                                                            <div class="H-group center2 mt4">
                                                                <div class="input-form V-group .no-wrap flex1">
                                                                    <label for="rvr">RVR</label>
                                                                    <input type="number" name="rvr" id="rvr"/>
                                                                </div>
                    
                                                                <div class="input-form V-group .no-wrap flex1">
                                                                    <label for="control">Control</label>
                                                                    <input type="number" name="control" id="control" value="25"/>
                                                                </div>
                    
                                                                <div class="input-form V-group .no-wrap flex1">
                                                                    <label for="valoresFracciones">Valores Fracciones</label>
                                                                    <input type="number" name="valoresFracciones" id="valoresFracciones"/>
                                                                </div>
                                                            </div>

                                                            <div class="H-group mt4">
                                                                
                                                                <div class="input-form V-group no-wrap flex1">
                                                                    <p>Desde:</p>
                                                                        <input type="date"/>
                                                                    
                                                                </div>
                                                            
                                                                <div class="input-form V-group no-wrap flex1">
                                                                    <p>Hasta:</p>
                                                                    
                                                                        <input type="date"/>
                                                                    
                                                            </div>
                                                        </div>
                                                        
                                                    </div>

                                                    <div class="button-div H-group">

                                                        <button type="button" class="prev-btn btn prev-btn-step3">Anterior</button>

                                                        <button type="submit" class="next-btn btn next-btn-step3">siguiente</button>
                    
                                                    </div>
                    
                                                </div>

                                        </div>





                                            <div class="step-from step4" style={{display: "none"}}>

                                                <h4 class="form-title">Previsualización</h4>
                    
                                            
                                                    <div class="button-div H-group">

                                                        <button type="button" class="prev-btn btn prev-btn-step4">Anterior</button>
                                                        
                                                        <button type="submit" class="next-btn btn">Enviar</button>
                    
                                                    </div>
                    
                                                </div>




                            </form>


                        </div>

                </section>

            </main>
        </Fragment>
    )
}

export default Reporte
