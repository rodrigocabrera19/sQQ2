import React, {useState, useEffect} from 'react'

const Step1 = () => {
    
    const [checking, setChecking] = useState()
    //Función que comprueba si hay algún checkbox activado. De ser así, devuelve true y lo guarda en el estado 'checking', estado que se usa para mostrar o no el botón siguiente.
    const check = () => {
        var c1 = Array.from(document.getElementsByClassName("check")).filter(cur => cur.type === 'checkbox' && cur.checked).length > 0;
        setChecking(c1)
    }

    useEffect(() => {
        checking ? document.querySelector('.next-btn-step1').style.display = "block" : document.querySelector('.next-btn-step1').style.display = "none"
    
    }, [checking])

    return (
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
    )
}

export default Step1
