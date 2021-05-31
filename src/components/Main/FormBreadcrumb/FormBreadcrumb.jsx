import React, {Fragment} from 'react';
import './style.css'

const FormBreadcrumb = () => {
    return (
        <Fragment class="content">
            <ul class="form-breadcrumb">
                <li class="step-li1 breadcrumb-active">Pieza</li>
                <li class="step-li2">Valor</li>
                <li class="step-li3">Propietario</li>
                <li class="step-li4">Previsualización</li>
            </ul>
        </Fragment>
    )
}

export default FormBreadcrumb