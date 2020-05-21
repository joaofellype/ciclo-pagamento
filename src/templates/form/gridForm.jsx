import React  from 'react' 
import Grid from '../layout/grid'

export default props =>(

        
  <div className="form-group col-md-4">
            <label  htmlFor={props.id}>{props.label}</label>
            <input {...props.input} className="form-control" 
                    placeholder={props.placeholder} id={props.id} readOnly={props.readOnly} type={props.type} />

        </div>
    )