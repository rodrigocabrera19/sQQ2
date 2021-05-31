import React from 'react'
import home from "../../../icons/home.png"
import sujetos from "../../../icons/sujetos.png"
import colecciones from "../../../icons/colecciones.png"
import reflejos from "../../../icons/reflejos.png"

const AdminMenu = () => {
    return (
        <div class="admin-menu">
        
            <div>
                    
                    <ul>
                        <li class="li-home">
                            <img src={home} alt=""/>
                            <a href="#">Home</a>
                        </li>
                        
                        <li class="li-sujeto">
                            <img src={sujetos} alt=""/>
                            <a href="#">
                                Sujetos</a>
                        </li>
                        
                        <li class="li-col">
                            <img src={colecciones} alt=""/>
                            <a href="#">
                                Colecciones</a>
                        </li>
                        
                        <li class="li-ref">
                            <img src={reflejos} alt=""/>
                            <a href="#">
                                Reflejos</a>
                        </li>
                    </ul>
                    
            </div>     
        
        
        </div>
    )
}

export default AdminMenu
