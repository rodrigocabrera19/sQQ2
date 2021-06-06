import React, {useState, useEffect} from 'react';
import alucard from '../../../../image/alucard.jpg';
import './style.css'

const Step2 = () => {

    useEffect(() => {
        const itemReport = document.querySelectorAll('.item-report');

            itemReport.forEach((item) =>{
                item.addEventListener('click', function(e){
                    item.classList.toggle('selected-item');
                    item.classList.toggle('selected');
                });
            });


            itemReport.forEach((item)=>{
                let allTab = document.querySelector('.all-tab button');
                let selectedTab = document.querySelector('.selected-tab button');
                

                allTab.addEventListener('click', function(e){
                    e.preventDefault();
                    document.querySelector('.selected-tab').classList.remove('active-tab');
                    document.querySelector('.all-tab').classList.add('active-tab');
                    document.querySelectorAll('.selected')
                        .forEach((selected) => {
                            selected.classList.add('selected-item');
                        })
                    item.style.display = 'block';
                    
                    
                });
                
                selectedTab.addEventListener('click', function(e){
                    e.preventDefault();
                    
                    document.querySelector('.selected-tab').classList.add('active-tab');
                    document.querySelector('.all-tab').classList.remove('active-tab');
                    
                    if(item.classList.contains('selected-item') || item.classList.contains('selected')){
                        item.style.display = 'block';
                        document.querySelectorAll('.selected')
                        .forEach((selected) => selected.classList.remove('selected-item'));
                        
                    } else {
                        item.style.display = "none";
                    }

                });
                

            });
    }, [])


    //Estado que guarda true o false según si el usuario seleccionó o no una carta. El mismo sirve para permitir el acceso o no a la sección 'selecionado'.
    const [selectedActive, setSelectedActive] = useState(null);
    //Función para verificar si el usuario seleccionó una carta en la sección 'choose' .De ser así, se le permite acceder al apartado 'seleccionado'.
    const selected = () => {
        const itemReport = document.querySelectorAll('.item-report');
        const items = [...itemReport];
        setSelectedActive(items.some(value => value.classList.contains('selected-item')))  

    }

    return (
        <div class="step-from step2" style={{display: "none"}}>

            <h4 class="form-title">Choose Pieces</h4>

            <div class="filter">
            </div>

            <div class="filter-tabs H-group" >

                <div class="tabs H-group" >
                    <div class="tab all-tab active-tab">
                        <button>
                            Todo
                        </button>
                    </div>
                    <div class="tab selected-tab">
                        {
                            selectedActive ? 
                                <button>
                                    Seleccionado
                                </button> 
                                :
                                <button disabled>
                                    Seleccionado
                                </button>
                        }
                                                        
                    </div>
                </div>


                <div class="filter-container grid-col6">
                                                

                    <div class="item-report" onClick={selected}>
                        <div class="item-container-report" >
                            <img src={alucard} alt=""/>
                            <div class="item-desc-report">
                                <div class="H-group">
                                    <h4 class="item-name-report">CSDVR1</h4>
                                </div>
                                <div class="item-rombo">
                                    
                                </div>
                            </div>
                        </div>


                        
                    </div>
                                                    
                    <div class="item-report" onClick={selected}>
                        <div class="item-container-report">
                            <img src={alucard} alt=""/>
                            <div class="item-desc-report">
                                <div class="H-group">
                                    <h4 class="item-name-report">CSDVR2</h4>
                                </div>
                                <div class="item-rombo">
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="item-report" onClick={selected}>
                        <div class="item-container-report" onClick={selected}>
                            <img src={alucard} alt=""/>
                            <div class="item-desc-report">
                                <div class="H-group">
                                    <h4 class="item-name-report">CSDVR3</h4>
                                </div>
                                <div class="item-rombo">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item-report" onClick={selected}>
                        <div class="item-container-report" onClick={selected}>
                            <img src={alucard} alt=""/>
                            <div class="item-desc-report">
                                <div class="H-group">
                                    <h4 class="item-name-report">CSDVR4</h4>
                                </div>
                                <div class="item-rombo">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="item-report" onClick={selected}>
                        <div class="item-container-report" onClick={selected}>
                            <img src={alucard} alt=""/>
                            <div class="item-desc-report">
                                <div class="H-group">
                                    <h4 class="item-name-report">CSDVR5</h4>
                                </div>
                                <div class="item-rombo">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="item-report" onClick={selected}>
                        <div class="item-container-report" onClick={selected}>
                            <img src={alucard} alt=""/>
                            <div class="item-desc-report">
                                <div class="H-group">
                                    <h4 class="item-name-report">CSDVR6</h4>
                                </div>
                                <div class="item-rombo">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>




            <div class="button-div H-group">

                <button type="button" class="prev-btn btn prev-btn-step2">Anterior</button>

                <button type="submit" class="next-btn btn next-btn-step2">siguiente</button>

            </div>


        </div>
    )
}

export default Step2
