import React, {useEffect, Fragment} from 'react';
import Search from '../Search/Search'
import './addSujetos.css';
import Title from '../Title/Title.jsx'

const AddSujetos = ({menuAbierto, activeMenu}) => {

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
            <main id="primary" onClick={cerrarMenu}>

                <Title seccion="Sujetos" display="none"/>

                <section class="content">

                    <h4 class="form-title2">AÑADIR NUEVO SUJETO</h4>

                    <div class="content-div">
                            
                        <form action="" class="form">


                                <h4 class="form-title">Crear nuevo sujeto</h4>


                                <div class="grid-col2">


                                    <div>
                                        <div class="H-group input-box">
                                            <div class="input-form V-group flex1">
                                                <label for="coleccion">
                                                    Colección<span class="required">*</span>
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl"><input type="text" name="coleccion"  required/></div>
                                                </div>
                                            </div>
                    
                                            <div class="input-form V-group flex1">
                                                <label for="sujeto">
                                                    Sujeto<span class="required">*</span>
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl">
                                                        <input type="text" name="sujeto"  required/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="H-group input-box">
                                        <div class="input-form V-group flex1">
                                                <label for="alto">
                                                    Alto (px)<span class="required">*</span>
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl"><input type="number" name="alto" id="alto" required/></div>
                                                </div>
                                            </div>
                    
                                            <div class="input-form V-group flex1">
                                                <label for="ancho">
                                                    Ancho (px)<span class="required">*</span>
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl"><input type="number" name="ancho" id="ancho" required/></div>
                                                </div>
                                            </div>
                
                                        </div>
                
                                        <div class="input-box">
                                            <div class="input-form V-group">
                                                <label for="url">
                                                    URL Alternativa
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl"><input type="url" placeholder="https://example.com" name="url" id="url"/></div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div id="input-box-valor">

                                            <div class="input-form V-group">
                                                <label for="Valor">
                                                    Moneda
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl">
                                                        <select class="monedas">
                                                            <option value="CHF">CHF</option>
                                                            <option value="EUR">EUR</option>
                                                            <option value="USD">USD</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="input-form V-group" id="valor">
                                                <label for="Valor">
                                                    Valor<span class="required">*</span>
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl">
                                                        <input type="number" name="valor" id="valor" required/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                
                
                
                                        <div class="input-box">
                                            <div class="input-form V-group">
                                                <label for="txt-curatorial">
                                                    Texto Curatorial
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl"><textarea type="text" name="txt-curatorial" id="txt-curatorial"></textarea></div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="input-box">
                                            <div class="input-form V-group">
                                                <label for="txt-periodistico">
                                                    Texto Periodístico
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl">
                                                        <textarea type="text" name="txt-periodistico" id="txt-periodistico"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                
                                        <div class="input-box">
                                            <div class="input-form V-group">
                                                <label for="r-historica">
                                                    Reseña Histórica
                                                </label>
                                                <div class="border-corner border-tr">
                                                    <div class="border-bl">
                                                        <textarea type="text" name="r-historica" id="r-historica"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="input-box2">
                    
                                        <div class="img-box-upload">
                                        
                                            <p class="drop-zone-label">Subir imagen</p>
                
                                            <input type="file" name="uploadFile" id="uploadFile"/>
                                            
                                            <div class="imagen-upload-preview">
                                            </div>
                
                                        </div>
            
                                    </div>


                                </div>


                                <div class="button-div H-group">
            
                                    <button type="reset" class="prev-btn reset-form btn">borrar</button>
                                    
                                    <button type="submit" class="next-btn btn">Enviar</button>

                                </div>


                        </form>
                        
                            <div class="successfull-form2 modal-window" style={{display: "none"}}>

                                <h3>el sujeto se ha guardado exitosamente !</h3>

                                <div class="btn-div">
                                    <a class="btn">Hacer otro certificado</a>
                                    <a class="btn">Volver al menú principal</a>
                                </div>

                    </div>

                            

                        </div>
            
                        

                
                </section>

                    

            </main>
        </Fragment>
    )
}

export default AddSujetos
