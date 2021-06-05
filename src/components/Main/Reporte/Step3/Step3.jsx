import React from 'react'

const Step3 = () => {
    return (
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
    )
}

export default Step3
