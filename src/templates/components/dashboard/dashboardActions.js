import axios from 'axios'

const BASE_URL = 'http://localhost:3003';


export function getSummary(){
    const request = axios.get(`${BASE_URL}/summary`)
    console.log(request)
    return {
        type:'BILLLING_SUMMARY_FETCHED',
        payload:request
    }
}