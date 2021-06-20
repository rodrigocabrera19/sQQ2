import React, {useEffect, useState} from 'react';
import './title.css';

const Title = ({ seccion }) => {

    useEffect(() => {
        const glitchTitle = document.querySelector('.title');

       
            setTimeout(() => {
            
                let titleBox = document.createElement('div');
                titleBox.classList.add('title-box');
                // document.querySelector('.title-section .divBox2').appendChild(titleBox);
            
                let sectionTitle = document.querySelector('.title-section .divBox2');
            
                sectionTitle.insertBefore(titleBox, sectionTitle.childNodes[0]);
            
                let titleOriginal = document.querySelector('.title');
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

        
        

        setTimeout(function backToOrigin(){
            let titleOriginal = document.querySelector('.title');
            titleOriginal.style.opacity = "1";

            document.querySelector('.glitch-title1').remove();
            document.querySelector('.glitch-title2').remove();
            document.querySelector('.glitch-title3').remove();
        }, 4000);

    }, [])
        

    return (
        
                
        <div class="divBox2 H-group">
            <h2 class="title" style={{opacity: "0"}}>{seccion}</h2>
        </div>
             
    )
}

export default Title
