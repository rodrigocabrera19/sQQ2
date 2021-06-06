import React, {useEffect, useState} from 'react';
import './title.css';
import Rombo from '../Rombo/Rombo'
import Search from '../Search/Search'

const Title = ({seccion, displayBtn, deseleccionar, eliminarSeleccionados}) => {

    useEffect(() => {
        const glitchTitle = document.querySelector('.title1');

        function glitch(){

            setTimeout(
                function glitchTitle1(){
            
                let titleBox = document.createElement('div');
                titleBox.classList.add('title-box');
                // document.querySelector('.title-section .divBox2').appendChild(titleBox);
            
                let sectionTitle = document.querySelector('.title-section .divBox22');
            
                sectionTitle.insertBefore(titleBox, sectionTitle.childNodes[0]);
            
                let titleOriginal = document.querySelector('.title1');
                titleBox.insertBefore(titleOriginal, titleBox.childNodes[0]);
            
                let copyTitle = document.createElement("h2");
                copyTitle.classList.add('glitch-title');
                copyTitle.classList.add('glitch-title1');
                copyTitle.innerText = glitchTitle.innerText;
                
                let copyTitle2 = document.createElement("h2");
                copyTitle2.classList.add('glitch-title');
                copyTitle2.classList.add('glitch-title2');
                copyTitle2.innerText = glitchTitle.innerText;
                
                let copyTitle3 = document.createElement("h2");
                copyTitle3.classList.add('glitch-title');
                copyTitle3.classList.add('glitch-title3');
                copyTitle3.innerText = glitchTitle.innerText;
                
                document.querySelector('.title-box').appendChild(copyTitle);
                document.querySelector('.title-box').appendChild(copyTitle2);
                document.querySelector('.title-box').appendChild(copyTitle3);
            }, 300);

        }
        glitch();
        

        setTimeout(function backToOrigin(){
            let titleOriginal = document.querySelector('.title1');
            titleOriginal.style.opacity = "1";

            document.querySelector('.glitch-title1').remove();
            document.querySelector('.glitch-title2').remove();
            document.querySelector('.glitch-title3').remove();

        
        }, 4000);
    }, [])

    const [setDisplayBtn, setSetDisplayBtn] = useState('');
    const setingDisplay = (display) => {
        setDisplayBtn === 'none' ? setSetDisplayBtn('') : setSetDisplayBtn(display); 
        
    }

    return (
        <section class="title-section">
            <div class="divBox11 H-group V-group-media-title">
                
                <div class="divBox22 H-group">
                    <h2 class="title1">{seccion}</h2>
                </div>
                <div className="btn-actions" style={{display:setDisplayBtn.length === 0 ? displayBtn : setDisplayBtn}}>
                    <button class="prev-btn reset-form btn-cancelar" onClick={deseleccionar}>CANCELAR</button>
                    <button class="prev-btn reset-form btn-delete" onClick={eliminarSeleccionados}>ELIMINAR SELECCIONADOS</button>
                </div>
                <Search setingDisplay={setingDisplay} deseleccionar={deseleccionar} display={displayBtn}/>
                
            </div>
            

        </section>
    )
}

export default Title
