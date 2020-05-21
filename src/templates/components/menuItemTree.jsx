import React from 'react'

export default props =>(

    <li className="nav-item has-treeview menu-open">
        <a className="nav-link active">
            <i className={`fa fa-${props.icon}`}></i>{props.label}
            <i className="fa fa-angle-left pull-right"></i>
        </a>
  
    <ul className="nav nav-treeview">
        {props.children}
    </ul>   
    </li>
)