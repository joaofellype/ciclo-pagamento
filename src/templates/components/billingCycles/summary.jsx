import React from 'react'

import Grid from '../../layout/grid'
import ValueBox from '../../widget/valueBox'

export default ({credit,debt})=>(

    <div className="container-fluid" >
           
            <fieldset>
                <legend>Resumo</legend>
                <div className="row">
           
                <ValueBox  cols="12 4" color="success" icon="bank" value={`R$ ${credit}`} text="Total de Créditos"/>
                <ValueBox cols="12 4" color="info" icon="credit-card" value={`R$ ${debt}`} text="Total de Debitos" /> 
                    <ValueBox cols="12 4" color="warning" icon="money" value={`R$ ${credit-debt}`} text="Valor Consolidade" /> 
                    </div>   
            </fieldset>
        
    </div>

)