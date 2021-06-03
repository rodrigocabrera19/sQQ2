import React, {useEffect} from 'react';
import './title.css';
import Rombo from '../Rombo/Rombo'
import Search from '../Search/Search'

const Title = ({seccion, display}) => {

    useEffect(() => {
        const glitchTitle = document.querySelector('.title');

        function glitch(){

            setTimeout(
                function glitchTitle1(){
            
                let titleBox = document.createElement('div');
                titleBox.classList.add('title-box');
                // document.querySelector('.title-section .divBox2').appendChild(titleBox);
            
                let sectionTitle = document.querySelector('.title-section .divBox22');
            
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

        }
        glitch();
        

        setTimeout(function backToOrigin(){
            let titleOriginal = document.querySelector('.title');
            titleOriginal.style.opacity = "1";

            document.querySelector('.glitch-title1').remove();
            document.querySelector('.glitch-title2').remove();
            document.querySelector('.glitch-title3').remove();

        
        }, 4000);
    }, [])

    return (
        <section class="title-section ">
            <div class="divBox11 H-group V-group-media-title">
                
                <div class="divBox22 H-group">
                    <h2 class="title">{seccion}</h2>
                    
                </div>
                <Search display={display}/>
                
            </div>
            

        </section>
    )
}

export default Title
