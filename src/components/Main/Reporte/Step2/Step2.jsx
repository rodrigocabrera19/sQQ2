import React, {useState} from 'react';
import alucard from '../../../../image/alucard.jpg';

const Step2 = () => {

    //Estado que guarda true o false según si el usuario seleccionó o no una carta. El mismo sirve para permitir el acceso o no a la sección 'selecionado'.
    const [selectedActive, setSelectedActive] = useState(null);
    //Función para verificar si el usuario seleccionó una carta en la sección 'choose' .De ser así, se le permite acceder al apartado 'seleccionado'.
    const selected = () => {
        const itemReport = document.querySelectorAll('.item-report');
        const item = [...itemReport];

        setSelectedActive(item.some(value => value.classList.contains('selected-item')))  
    }

    return (
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
                            selectedActive ? 
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
    )
}

export default Step2
