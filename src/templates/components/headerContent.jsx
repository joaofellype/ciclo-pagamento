import React from 'react'

export default props =>(
    
        <div className="content-header">
        <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">{props.title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">{props.small}</a></li>
            </ol>
          </div>
        </div>
      </div>
      
    </div>
)