import React from 'react'

import If from '../operator/if'

export default props => (
    <If test={!props.hide}>
        <div className="input-group mb-3"> 
            <input {...props.input} type={props.type} className="form-control" placeholder={props.placeholder}/>
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className={`fa ${props.icon}`}></span>
                    </div>
                </div>
    
     </div>
    </If>
    )