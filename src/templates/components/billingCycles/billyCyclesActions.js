import axios from 'axios'
import {
    toastr
} from 'react-redux-toastr'
import {
    reset as resetForm,
    initialize
} from 'redux-form'

import {
    selectTab,
    showTabs
} from '../../tab/tabActions'
const BASE_URL = 'http://localhost:3003/'
const INITINAL_VALUES = {credits:[{}],debts:[{}]}
export function getList() {
    const request = axios.get(`${BASE_URL}listarAllBilling`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post', 'createBillingCycle')
}

export function update(values) {
    return submit(values,'put','editBilling')
}
export function Delete(values) {
    return submit(values,'delete','deleteBilling')
}
export function submit(values, method, url) {
    const id = values._id ? '/'+values._id : ''

    return dispatch => {
        axios[method](`${BASE_URL}${url}${id}`, values).then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        }).catch(err => {
            toastr.error('Error', err.response.data.message)
        })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tbEditar'),
        selectTab('tbEditar'),
        initialize('billingCycleForm', billingCycle)
    ]
}
export function showDelete(billingCycle) {
    return [
        showTabs('tbExcluir'),
        selectTab('tbExcluir'),
        initialize('billingCycleForm', billingCycle)
    ]
}
export function init() {

    return [
        showTabs('tbListar', 'tbAdicionar'),
        selectTab('tbListar'),
        getList(),
        initialize('billingCycleForm', INITINAL_VALUES)
    ]
}