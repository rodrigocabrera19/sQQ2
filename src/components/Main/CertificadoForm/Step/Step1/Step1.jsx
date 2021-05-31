import React, {useEffect, Fragment, useState} from 'react';
import './style.css'
const Step1 = ({updateData}) => {
    const [alertPlaceHolder, setAlertPlaceHolder] = useState(null)
    const [image, setImage] = useState('')

    //Estado en forma de array, con un objeto dentro que guardará la referencia de la pieza  que el usuario ingrese.
    const [referenciaPieza, setReferenciaPieza] = useState([
        {
            "id":"ref",
            "coleccion":"",
            "sujeto":"",
            "derivado":"",
            "variante":"",
            "reflejo":"",
            "alto":"",
            "ancho":"",
            "peso":"",
            "año":"",
            "generacion":"",
            "intelectual":"",
            "monetaria":"",
            "comercial":"",
            "version":""
        }
    ])

    //función que guarda la referencia de la pieza en el estado 'referenciaPieza'
    const handleRef = (e) => {
        if(e.target.id === 'reflejo' && e.target.value > 499){
            setAlertPlaceHolder('El número ingresado debe ser menor a 499');
            referenciaPieza[0].reflejo = "";
        }else{
            setAlertPlaceHolder(null);
            const newData = [
                
                {
                    "id":"ref",
                    "coleccion":e.target.id === 'coleccion'  ? e.target.value : referenciaPieza[0].coleccion,
                    "sujeto":e.target.id === 'sujeto' ? e.target.value : referenciaPieza[0].sujeto,
                    "derivado":e.target.id === 'derivado' ? e.target.value : referenciaPieza[0].derivado,
                    "variante":e.target.id === 'variante' ? e.target.value : referenciaPieza[0].variante,
                    "reflejo":e.target.id === 'reflejo' ? e.target.value : referenciaPieza[0].reflejo,
                    
                    "alto":e.target.id === 'm-alto' ? e.target.value : referenciaPieza[0].alto,
                    "ancho":e.target.id === 'm-ancho' ? e.target.value : referenciaPieza[0].ancho,
                    "peso":e.target.id === 'weight' ? e.target.value : referenciaPieza[0].peso,
                    "año":e.target.id === 'year' ? e.target.value : referenciaPieza[0].año,
                    "generacion":e.target.id === 'generacion' ? e.target.value : referenciaPieza[0].generacion,
                    "intelectual":e.target.id === 'b-intelectual' ? e.target.value : referenciaPieza[0].intelectual,
                    "monetaria":e.target.id === 'b-monetaria' ? e.target.value : referenciaPieza[0].monetaria,
                    "comercial":e.target.id === 'b-comercial' ? e.target.value : referenciaPieza[0].comercial,
                    "version":e.target.id === 'version' ? e.target.value : referenciaPieza[0].version,
                }
                
            ]
            setReferenciaPieza(newData)
        }
        
        
    }

    //Función que se activa cuando el usuario presiona 'siguiente' y envía la información registrada en el estado 'referenciaPieza' al componente padre 'certificadoForm'. Que luego se mostrará en el 'Step4' o previsualizador.
    const sendReferenciaPieza = () => {
        updateData(referenciaPieza, image)
    }


    //DRAG AND DROP
    useEffect(() => {

        document.querySelectorAll("#uploadFile").forEach((inputElement) => {
            const dropZoneElement = inputElement.closest(".img-box-upload");
          
            dropZoneElement.addEventListener("click", (e) => {
              inputElement.click();
            });
          
            inputElement.addEventListener("change", (e) => {
              if (inputElement.files.length) {
                updateThumbnail(dropZoneElement, inputElement.files[0]);
              }
            });
          
            dropZoneElement.addEventListener("dragover", (e) => {
              e.preventDefault();
              dropZoneElement.classList.add("drop-zone--over");
            });
          
            ["dragleave", "dragend"].forEach((type) => {
              dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("drop-zone--over");
              });
            });
          
            dropZoneElement.addEventListener("drop", (e) => {
              e.preventDefault();
          
              if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files;
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
              }
          
              dropZoneElement.classList.remove("drop-zone--over");
                });
            });
          
          
          function updateThumbnail(dropZoneElement, file) {
            let thumbnailElement = dropZoneElement.querySelector(".image-upload-preview");
          
            // First time - remove the prompt
            if (dropZoneElement.querySelector(".drop-zone-label")) {
              //dropZoneElement.querySelector(".drop-zone-label").remove();
              dropZoneElement.querySelector(".drop-zone-label").style.display = "none";
            }
          
            // First time - there is no thumbnail element, so lets create it
            if (!thumbnailElement) {
              thumbnailElement = document.createElement("div");
              thumbnailElement.classList.add("image-upload-preview");
              dropZoneElement.appendChild(thumbnailElement);
            }
          
            thumbnailElement.dataset.label = file.name;
          
            // Show thumbnail for image files
            if (file.type.startsWith("image/")) {
              const reader = new FileReader();
          
              reader.readAsDataURL(file);
              reader.onload = () => {
                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
                setImage(reader.result);
              };
            } 
            else {
              thumbnailElement.style.backgroundImage = null;
            }
          }
    
          // RESET TMB IMAGEN Y VUELTA A PONER P
    
        const btnErase = document.querySelector('.reset-form');
    
        if(btnErase){
    
            btnErase.addEventListener('click', function(){
            let thumbnailElement = document.querySelector(".image-upload-preview");
            thumbnailElement.style.backgroundImage = "none";
    
            document.querySelector('.drop-zone-label').style.display = "flex";
            })
    
      }
    
        }, [])



    
    return (
        <Fragment>
            <div class="step-from step1" >

                <h4 class="form-title">Referencia de la pieza</h4>


                    <div class="grid-col2">

                        <div class="input-box V-group" id="input-box1">

                            <div  id="div-group1">
                                <div class="input-form V-group">
                                    <label for="coleccion">Colección</label>
                                    <input type="number" name="coleccion" id="coleccion" value={referenciaPieza[0].coleccion} onChange={handleRef}/>
                                </div>

                                <div class="input-form V-group">
                                    <label for="sujeto">Sujeto</label>
                                    <input type="text" name="sujeto" id="sujeto" value={referenciaPieza[0].sujeto} onChange={handleRef}/>
                                </div>

                                <div class="input-form V-group">
                                    <label for="derivado">Derivado</label>
                                    <input type="text" name="derivado" id="derivado" value={referenciaPieza[0].derivado} onChange={handleRef}/>
                                </div>

                                <div class="input-form V-group">
                                    <label for="variante">Variante</label>
                                    <input type="text" name="variante" id="variante" value={referenciaPieza[0].variante} onChange={handleRef}/>
                                </div>


                                <div class="input-form V-group">
                                    <label for="reflejo">Reflejo</label>
                                    <input 
                                        type="number" 
                                        name="reflejo" 
                                        id="reflejo" 
                                        value={referenciaPieza[0].reflejo} 
                                        onChange={handleRef}
                                    />
                                    {
                                     alertPlaceHolder !== null && <span style={{backgroundColor:"orange", position:"absolute", color:"white", padding:"5px"}}>{alertPlaceHolder}</span>
                                    }
                                </div>
                            </div>

                            
                            <div class="V-group mt4 ">

                                

                                <div class="H-group " id="div-group2">
                                    <div class="input-form V-group">
                                        <label for="m-alto">Alto (px)</label>
                                        <input type="number" name="m-alto" id="m-alto" value={referenciaPieza[0].alto} onChange={handleRef}/>
                                    </div>

                                    <div class="input-form V-group">
                                        <label for="m-ancho">Ancho (px)</label>
                                        <input type="number" name="m-ancho" id="m-ancho" value={referenciaPieza[0].ancho} onChange={handleRef}/>
                                    </div>

                                    <div class="input-form V-group" id="peso">
                                    
                                        <label for="weight">Peso (bytes)</label>
                                        <input type="number" name="weight" id="weight" value={referenciaPieza[0].peso} onChange={handleRef}/>
                                    </div>

                                </div>
                                    


                                
                                <div class="H-group mt4" id="div-group3">
                                    
                                    <div class="input-form V-group">
                                        <label for="year">Año</label>
                                        <input type="number" name="year" id="year" value={referenciaPieza[0].año} onChange={handleRef}/>
                                    </div>
                                    
                                    <div class="input-form V-group">
                                        <label for="generacion">Generación</label>
                                        <input type="number" name="generacion" id="generacion" value={referenciaPieza[0].generacion} onChange={handleRef}/>
                                    </div>

                                    
                                </div>


                            
                                
                                
                                    <div class="H-group" id="div-group4">

                                        <div class="input-form V-group">
                                            <label for="b-intelectual">Intelectual</label>
                                            <input type="number" name="b-intelectual" id="b-intelectual" value={referenciaPieza[0].intelectual} onChange={handleRef}/>
                                        </div>

                                        <div class="input-form V-group">
                                            <label for="b-monetaria">Monetaria</label>
                                            <input type="number" name="b-monetaria" id="b-monetaria" value={referenciaPieza[0].monetaria} onChange={handleRef}/>
                                        </div>

                                        <div class="input-form V-group">
                                            <label for="b-comercial">Comercial</label>
                                            <input type="number" name="b-comercial" id="b-comercial" value={referenciaPieza[0].comercial} onChange={handleRef}/>
                                        </div>

                                        <div class="input-form V-group">
                                            <label for="b-comercial">Versión</label>
                                            <input type="number" name="version" id="version" value={referenciaPieza[0].version} onChange={handleRef}/>
                                        </div>

                                    </div>
                            </div>
                        </div>

                        



                        <div class="input-box2" >

                            <div class="img-box-upload">
                            
                                <p class="drop-zone-label">Subir imagen</p>

                                <input type="file" name="uploadFile" id="uploadFile"/>
                                
                                <div class="imagen-upload-preview">
                                </div>

                            </div>

                        </div>
                    </div>


                    <div class="button-div H-group">

                        <button type="submit" class="next-btn btn next-btn-step1" onClick={sendReferenciaPieza}>siguiente</button>

                    </div>

                </div>
        </Fragment>
    )
}

export default Step1
