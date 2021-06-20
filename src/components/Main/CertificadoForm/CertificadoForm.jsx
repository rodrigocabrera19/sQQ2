import React, {Fragment, useState, useEffect} from 'react';
import './certificadoForm.css'
import Title from '../Title/Title';
import FormBreadcrumb from '../FormBreadcrumb/FormBreadcrumb';
import Step1 from './Step/Step1/Step1'
import Step2 from './Step/Step2/Step2'
import Step3 from './Step/Step3/Step3'
import Step4 from './Step/Step4/Step4';

const CertificadoForm = ({ cerrarMenu }) => {
    //Estado que guarda la imagen elegida en el componente hijo 'Ste1'.
    const [image, setImage] = useState('');

    //Estado que guarda la infromación recibida del componente hijo 'Ste1'.
    const [referenciaPieza, setReferenciaPieza] = useState(null);
    
    //Estado que guarda la infromación recibida del componente hijo 'Step2'.
    const [valor, setValor] = useState(null);

    //Estado que guarda la infromación recibida del componente hijo 'Step3'.
    const [creatorData, setCreatorData] = useState(null);

    //Función que actualiza la información de los estados 'referenciaPieza, imagen, valor y creatorData' que vienen del 'Step1, Step2, Step3' respectivamente. 
    const updateData = (data, image) => {
        if(data.length) {
            if(data[0].id === "creator"){
                setCreatorData(data)
            }else if(data[0].id === "valor"){
                setValor(data)
            }else if(data[0].id === "ref"){
                setReferenciaPieza(data)
                setImage(image)
            }
        }
        return;
        
    }

    
    useEffect(() => {
            //FORM BOTONES + INPUTS 
    
            const nxtBtn1 = document.querySelector('.next-btn-step1');
            const nxtBtn2 = document.querySelector('.next-btn-step2');
            const nxtBtn3 = document.querySelector('.next-btn-step3');
    
            const prevBtn1 = document.querySelector('.prev-btn-step2');
            const prevBtn2 = document.querySelector('.prev-btn-step3');
            const prevBtn3 = document.querySelector('.prev-btn-step4');
    
            const formStep1 = document.querySelector('.step1');
            const formStep2 = document.querySelector('.step2');
            const formStep3 = document.querySelector('.step3');
            const formStep4 = document.querySelector('.step4');
    
            const stepLi1 = document.querySelector('.step-li1');
            const stepLi2 = document.querySelector('.step-li2');
            const stepLi3 = document.querySelector('.step-li3');
            const stepLi4 = document.querySelector('.step-li4');
    
    
    
            if(nxtBtn1){
    
                nxtBtn1.addEventListener('click', function(e){
                e.preventDefault();
    
                formStep1.style.display = "none";
                formStep2.style.display = "block";
                stepLi1.classList.remove('breadcrumb-active');
                stepLi2.classList.add('breadcrumb-active');
                });
                }
    
    
    
                if(prevBtn1){
    
                prevBtn1.addEventListener('click', function(e){
                    e.preventDefault();
                    formStep1.style.display = "block";
                    formStep2.style.display = "none";
                    stepLi1.classList.add('breadcrumb-active');
                    stepLi2.classList.remove('breadcrumb-active');
                });
    
                }
    
                if(nxtBtn2){
    
                nxtBtn2.addEventListener('click', function(x){
                    x.preventDefault();
                    formStep2.style.display = "none";
                    formStep3.style.display = "block";
                    stepLi2.classList.remove('breadcrumb-active');
                    stepLi3.classList.add('breadcrumb-active');
                });
    
                }
    
    
                if(prevBtn2){
                prevBtn2.addEventListener('click', function(e){
                    e.preventDefault();
                    formStep2.style.display = "block";
                    formStep3.style.display = "none";
                    stepLi2.classList.add('breadcrumb-active');
                    stepLi3.classList.remove('breadcrumb-active');
                });
                }
    
    
            if(nxtBtn3){
                nxtBtn3.addEventListener('click', function(e){
                e.preventDefault();
                formStep3.style.display = "none";
                formStep4.style.display = "block";
                stepLi3.classList.remove('breadcrumb-active');
                stepLi4.classList.add('breadcrumb-active');
                });
            }
    
            if(prevBtn3){
                prevBtn3.addEventListener('click', function(e){
                e.preventDefault();
                formStep3.style.display = "block";
                formStep4.style.display = "none";
                stepLi3.classList.add('breadcrumb-active');
                stepLi4.classList.remove('breadcrumb-active');
                });
            }
    }, [])

    return (
        <Fragment>
            <main id="primary" onClick={() => cerrarMenu(false)}>
                
                        
                        <FormBreadcrumb/>
                        <form class="div-form">
                            {/*Se le pasa la función updateData al componente 'Step1' para que envíe la información sobre referencia de la pieza ingresada en los inputs. */}
                            <Step1 updateData={updateData} />

                            {/*Se le pasa la función updateData al componente 'Step2' para que envíe la información sobre el valor de la pieza ingresada en los inputs. */}
                            <Step2 updateData={updateData}/>

                            {/*Se le pasa la función updateData al componente 'Step3' para que envíe la información sobre el creador de la pieza ingresada en los inputs. */}
                            <Step3 updateData={updateData}/>

                            {/*Se le pasa el estado con la información del 'creatorData' al componente 'Step4' para que la muestre en el preview. */}
                            <Step4 creatorData={creatorData} valor={valor} referenciaPieza={referenciaPieza} image={image}/>
                        </form>
                   
            </main>


        </Fragment>
    )
}

export default CertificadoForm
