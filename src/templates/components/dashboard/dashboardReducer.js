const INITINAL_STATE  = {summary:{credit:0,debt:0}}

export default function (state =  INITINAL_STATE,action){
    
    switch(action.type){
        case 'BILLLING_SUMMARY_FETCHED':
            return {...state, summary:action.payload.data}

        default:
            return state
    }
}