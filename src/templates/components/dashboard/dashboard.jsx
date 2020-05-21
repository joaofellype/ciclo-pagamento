import React,{Component} from 'react'

import ContentHeader from '../headerContent'
import Content from '../content'
import ValueBox from '../../widget/valueBox'

import { bindActionCreators} from 'redux'
import { getSummary} from './dashboardActions'
import {connect} from 'react-redux'
class Dashboard extends Component{

     componentWillMount(){
         this.props.getSummary()
     }
    render(){
        const {credit,debt} = this.props.summary
        return(

           <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />

                <Content>
                <div className="container-fluid"> 
                <div className="row">
                    <ValueBox cols="12 6" color="success" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" /> 
                    <ValueBox cols="12 6" color="info" icon="credit-card" value={`R$ ${debt}`} text="Total de Debitos" /> 
                    <ValueBox cols="12 6" color="warning" icon="money" value="R$ 10,00" text="Valor Consolidade" /> 
                    </div>
                    </div>
                </Content>

                </div>
         
 
        )
    }
}


const mapStateProps = state =>({summary:state.dashboard.summary})
const mapDispatchProps = dispatch =>bindActionCreators({getSummary},dispatch)
export default connect(mapStateProps,mapDispatchProps)(Dashboard)