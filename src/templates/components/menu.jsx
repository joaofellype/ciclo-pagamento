import React from 'react'

import MenuItem from './menuItem'
import MenuItemTree  from './menuItemTree'
export default props =>(

    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <MenuItem path="/home" label="Dashboard" icon="dashboard"/>
        <MenuItemTree label="Cadastro" icon="edit">
            <MenuItem path="/billingCycles" label="Ciclos de Pagamento" icon="usd" />
        </MenuItemTree>
    </ul>
)