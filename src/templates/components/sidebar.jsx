import React from 'react';

import Menu from './menu'
export default props => (

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a className="brand-link">

            MY- MONEY
              <i className="fa fa-money"></i>
        </a>
        <div className="sidebar">
            <nav className="mt-2">
                <Menu />
            </nav>
        </div>

    </aside>
)