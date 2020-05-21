import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { init} from './billyCyclesActions'
import { reduxForm, Field, formValueSelector} from 'redux-form'
import LabelInput from '../../form/gridForm'
import { connect } from 'react-redux';
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary(){
        const sum =(t,v)=> t+v;

        if(this.props.credits.length >0 && this.props.debts.length >0 ){
            return{
                sumOfCredits:this.props.credits.map(c=>+c.value || 0).reduce(sum),
                sumOfDebits:this.props.debts.map(d=> +d.value || 0).reduce(sum)
            }
        }else{
            return{
                sumOfCredits:[],
                sumOfDebits:[],
            }
        }
      
    }
    render() {
        const { handleSubmit,   readyOnly, credits, debts} = this.props
        const {sumOfCredits,sumOfDebits} = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
            <div className="card-body">
                <div className="row">
               
                <Field name="name" id="nome" readOnly={readyOnly} component={LabelInput} label="Nome" placeholder="Informe o nome"/>
                <Field name="month"  id="mes" readOnly={readyOnly} component={LabelInput} label="Mês" type="number" placeholder="Informe o mês"/>
                <Field name="year" id="ano"  readOnly={readyOnly}  component={LabelInput} label="Ano"  number="number" placeholder="Informe o Ano"/>
                <Summary credit={sumOfCredits} debt={sumOfDebits} />
                <ItemList cols="10 5" readOnly={readyOnly} list={credits} field="credits" legend="Créditos" />
                <ItemList showStatus={true} cols="12 6" readOnly={readyOnly} list={debts} field="debts" legend="Débitos" />
            </div>
            <div className="card-footer">
                  <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                  <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
                </div>
            </form>
        );
    }
}
BillingCycleForm = reduxForm({form:'billingCycleForm',destroyOnUnmount:false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits:selector(state,'credits'),debts:selector(state,'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({init},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)   