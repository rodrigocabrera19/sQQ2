import React,{useEffect} from 'react';
import './style.css'

const Step4 = ({creatorData, valor, referenciaPieza, image}) => {
    
    //Función que mapea la información del 'creatorData' y la muestra en pantalla.
    const refPieza = referenciaPieza?.map(value => {
        return ( 
            <article class="article article1">
                            <div class="editar"><button class="button-edit">E</button></div>
                            <div class="group-article1">
                                
                                <div class="group-pieza">
                                    <section class="pieza">
                                        <p>PIEZA</p>
                                        <p>
                                            C <span><b>{value.coleccion.length === 0 ? '0' : value.coleccion}</b> </span> 
                                            S <span><b>{value.sujeto.length === 0 ? '0' : value.sujeto}</b> </span> 
                                            D <span><b>{value.derivado.length === 0 ? '0' : value.derivado}</b> </span>
                                            R <span><b>{value.reflejo.length === 0 ? '0' : value.reflejo} / 499</b> </span> 
                                        </p>
                                    </section>

                                    <section class="medidas">
                                        <p>MEDIDAS</p>
                                        <p>
                                            <span><b>{value.alto.length === 0 ? '-' : value.alto}</b> x </span>
                                            <span><b> {value.ancho.length === 0 ? '-' : value.ancho}</b> </span>
                                        </p>
                                    </section>

                                    <section class="peso">
                                        <p>PESO</p>
                                        <p><span><b>{value.peso.length === 0 ? '-' : value.peso}</b> bytes </span></p>
                                    </section>
                                </div>

                                <div class="group-año">
                                    <section class="año">
                                        <p>AÑO</p>
                                        <p><span><b>{value.año.length === 0 ? '-' : value.año}</b> </span></p>
                                    </section>

                                    <section class="año">
                                        <p>GENERACIÓN</p>
                                        <p><span><b>{value.generacion.length === 0 ? '-' : value.generacion}</b> </span></p>
                                    </section>
                                </div>

                                <div class="group-pieza">
                                    <section>
                                        <p>EDAD DE LA PIEZA</p>
                                        <p>
                                            I <span><b>{value.intelectual.length === 0 ? '-' : value.intelectual}</b> </span> 
                                            M <span><b>{value.monetaria.length === 0 ? '-' : value.monetaria}</b> </span> 
                                            C <span><b>{value.comercial.length === 0 ? '-' : value.comercial}</b> </span>
                                        </p>
                                    </section>
                                    <section class="version">
                                        <p>VERSIÓN</p>
                                        <p><span><b>{value.version.length === 0 ? '-' : value.version}</b> </span></p>
                                    </section>
                                </div>
                            </div>
                        </article>
        )
    });

    //Función que mapea la información del 'referenciaPieza' y la muestra en pantalla.
    const valorPieza = valor?.map(value =>{
        return(
            <div class="group-control">
                <section>
                    <p>RVR</p>
                    <p><span><b>{value.rvr.length === 0 ? '-' : value.rvr}</b></span></p>
                </section>
                <section>
                    <p>CONTROL</p>
                    <p><span><b>{value.control.length === 0 ? '-' : value.control}</b></span></p>
                </section>
                <section>
                    <p>SEED EFF</p>
                    <p><span><b>{value.seed.length === 0 ? '-' : value.seed}</b></span></p>
                </section>
                <section>
                    <p>RI</p>
                    <p><span><b>{value.remision.length === 0? '-' : value.remision}</b></span></p>
                </section>
            </div>
        )
    });

    //Función que mapea la información del 'valor' y la muestra en pantalla.
    const datosCreador = creatorData?.map(value =>{
        return(
            <div class="group-pieza">
                <section class="año">
                    <p>CREADOR</p>
                    <p><span><b>{value.creador.nombre.length === 0 ? '-' : value.creador.nombre}</b> </span></p> 
                    <p><span><b>{value.creador.apellido.length === 0 ? '-' : value.creador.apellido}</b> </span></p> 
                    <p><span><b>{value.creador.año.length === 0 ? '-' : value.creador.año}</b> </span></p>
                    
                </section>

                <section>
                    <p>DUEÑO</p>
                    <p><span><b>{value.dueño.nombre.length === 0 ? '-' : value.dueño.nombre}</b> </span></p> 
                    <p><span><b>{value.dueño.apellido.length === 0 ? '-' : value.dueño.apellido}</b> </span></p> 
                    
                </section>
            </div>
        )
    });
    

    return (

                <section class="container step4" style={{display: "none"}}>
                    <h4 class="form-title">Previasualización</h4>
                    <div class="container-img">
                        <img className="image" src={image} alt="imagen de la pieza"/>
                    </div>

                    <section class="container-article">

                        {
                            refPieza
                        }

                        <article class="article article2">
                            <div class="editar"><button class="button-edit">E</button></div>
                            <div class="group-article2">
                                {
                                    valorPieza
                                }
                            </div>
                        </article>

                        <article class="article article3">
                            <div class="editar"><button class="button-edit">E</button></div>
                            <div class="group-article3">
                                {
                                    datosCreador
                                }
                            </div>
                        </article>

                    </section>

                    <div class="button-preview H-group">

                        <button type="button" class="prev-btn btn prev-btn-step4">Anterior</button>
                                    
                        <button type="submit" class="next-btn btn">Enviar</button>

                    </div>
                    
                </section>

                
    )
}

export default Step4
