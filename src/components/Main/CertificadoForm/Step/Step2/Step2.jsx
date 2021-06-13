import React, {useState} from 'react'

const Step2 = ({updateData}) => {
    //Estado en forma de array, con un objeto dentro que guardará el valor de la pieza  que el usuario ingrese.
    const [valor, setValor] = useState([
        {
            "rvr":"",
            "control":"",
            "seed":"",
            "remision":"",
            "id":"valor"
        }
    ])
    
    //función que guarda el valor de la pieza en el estado 'valor'
    const handleValor = (e) => {
        const newData = [
            {
                "rvr":e.target.id === 'rvr' ? e.target.value : valor[0].rvr,
                "control":e.target.id === 'control' ? e.target.value : valor[0].control,
                "seed":e.target.id === 'seed' ? e.target.value : valor[0].seed,
                "remision":e.target.id === 'remision' ? e.target.value : valor[0].remision,
                "id":"valor"
            }
            
        ]
        setValor(newData)
    }

    //Función que se activa cuando el usuario presiona siguiente y envía la información registrada en el estado 'valor' al componente padre 'certificadoForm'.
    const SendValor = () => {
        updateData(valor)
        console.log(valor)
    }


    return (
        <div class="step-from step2" style={{display: "none"}}>

                <h4 class="form-title">Valor de la pieza</h4>

                    <div >

                        <div  class="input-box3 input-box">

                            <div class="H-group" id="input-valores">

                                <div class="input-form V-group">
                                    <label for="rvr">RVR</label>
                                    <div class="border-corner border-tr">
                                        <div class="border-bl">
                                            <input type="number" name="rvr" id="rvr" onChange={handleValor}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-form V-group">
                                    <label for="control">Control</label>
                                    <div class="border-corner border-tr">
                                        <div class="border-bl">
                                            <input type="number" name="control" id="control" onChange={handleValor}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-form V-group">
                                    <label for="rvr">Seed Eff</label>
                                    <div class="border-corner border-tr">
                                        <div class="border-bl">
                                            <input type="number" name="seed" id="seed" onChange={handleValor}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-form V-group">
                                    <label for="control">Remision Anual</label>
                                    <div class="border-corner border-tr">
                                        <div class="border-bl">
                                            <input type="number" name="remision" id="remision" value={valor[0].remision} onChange={handleValor}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>


                    <div class="button-div H-group">

                        <button type="button" class="prev-btn btn prev-btn-step2">Anterior</button>

                        <button type="submit" class="next-btn btn next-btn-step2" onClick={SendValor}>siguiente</button>

                    </div>


                </div>
    )
    }

export default Step2
