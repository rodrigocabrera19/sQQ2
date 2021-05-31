import React, {Fragment} from 'react'
import './rombo.css'

const Rombo = ({display}) => {
    return (
        <Fragment>
            <a class="add-button" style={{display:display}}>
                <div class="rombo-btn">
                    <span></span>
                    <span></span>
                </div>
                <p class="button-text">Añadir nuevo</p>
            </a>
        </Fragment>
    )
}

export default Rombo
