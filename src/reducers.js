import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import DashboardReducer from './templates/components/dashboard/dashboardReducer'
import TabReducer from './templates/tab/tabReducers'
import AuthReducer from './auth/authReducer'
import BillingCyleReducer from './templates/components/billingCycles/billingCyclesReducers';
const rootReducer = combineReducers({
    dashboard:  DashboardReducer,
    tab:TabReducer,
    billingCycle:BillingCyleReducer,
    form:formReducer,
    toastr:toastrReducer,
    auth:AuthReducer
})

export default rootReducer