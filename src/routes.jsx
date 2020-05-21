import React from 'react'
 import AuthOrApp from './authOrApp'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './templates/components/dashboard/dashboard'
import BillingCycle from './templates/components/billingCycles/billyCicle'
  
export default props=>(
  
        <Switch>
                <Route exact  path="/login" component={AuthOrApp} />
                <Route  path="/home" component={Dashboard} />
                <Route  path="/billingCycles" component={BillingCycle} />
        </Switch>
)