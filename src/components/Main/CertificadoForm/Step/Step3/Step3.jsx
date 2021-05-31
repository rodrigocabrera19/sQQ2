import React, {useState} from 'react';
import './style.css'

const Step3 = ({updateData}) => {
    //Estado en forma de array, con objetos dentro que guardarán los datos del creador de la pieza que el usuario ingrese.
    const [creatorData, setCreatorData] = useState([
        {
            "id":"creator",
            "creador":
                {
                    "nombre":"",
                    "apellido":"",
                    "año":""
                },
            "dueño":
                {
                    "nombre":"",
                    "apellido":""
                },
            
        }
    ])
    
    //función que guarda los datos del creador de la pieza en el estado 'creatorData'
    const handleCreador = (e) => {
        const newData = [{
            "id":"creator",
            "creador":
                {
                    "nombre": e.target.id === 'creatorName' ? e.target.value : creatorData[0].creador.nombre,
                    "apellido":e.target.id === 'creatorAp' ? e.target.value : creatorData[0].creador.apellido,
                    "año":e.target.id === 'creatorAño' ? e.target.value : creatorData[0].creador.año
                },
            "dueño":
                {
                    "nombre":e.target.id === 'dueñoName' ? e.target.value : creatorData[0].dueño.nombre,
                    "apellido":e.target.id === 'dueñoAp' ? e.target.value : creatorData[0].dueño.apellido
                }
        }]
        setCreatorData(newData)
        
    }

    //Función que se activa cuando el usuario presiona siguiente y envía la información registrada en el estado 'creatorData' al componente padre 'certificadoForm'.
    const sendCreador = () => {
        updateData(creatorData)
    }

    return (
        
            <div class="step-from step3" style={{display: "none"}}>

                <h4 class="form-title">Datos</h4>

                

                        <div class="V-group div-container-medidas" >

                            <div id="input-medidas" >
                                
                                <h4 class="form-title2">Creador de la pieza</h4>
                                
                                <div class="input-form V-group">
                                    <label for="m-alto">Nombre</label>
                                    <input type="text" name="m-alto" id="creatorName" value={creatorData[0].creador.nombre} onChange={handleCreador}/>
                                </div>

                                <div class="input-form V-group">
                                    <label for="m-ancho">Apellido</label>
                                    <input type="text" name="m-ancho" id="creatorAp" value={creatorData[0].creador.apellido} onChange={handleCreador}/>
                                </div>

                                <div class="input-form V-group" >
                                
                                    <label for="weight">Año de nacimiento</label>
                                    <input type="number" name="weight" id="creatorAño" value={creatorData[0].creador.año} onChange={handleCreador}/>
                                </div>

                            </div>

                            

                            <div   id="input-medidas" className="mt4">
                                <h4 class="form-title2">Dueño de la pieza</h4>
                                <div class="input-form V-group">
                                    <label for="m-alto">Nombre</label>
                                    <input type="text" name="m-alto" id="dueñoName" value={creatorData[0].dueño.nombre} onChange={handleCreador}/>
                                </div>

                                <div class="input-form V-group">
                                    <label for="m-ancho">Apellido</label>
                                    <input type="text" name="m-ancho" id="dueñoAp" value={creatorData[0].dueño.apellido} onChange={handleCreador}/>
                                </div>

                            </div>

                        </div>

                <div class="button-div H-group">

                    <button type="button" class="prev-btn btn prev-btn-step3">Anterior</button>

                    <button type="submit" class="next-btn btn next-btn-step3" onClick={sendCreador}>siguiente</button>

                </div>

            </div>
    )
}

export default Step3
