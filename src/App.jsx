import React from 'react';
import './templates/components/custom.css'
import Header from './templates/components/header'
import Sidebar from  './templates/components/sidebar'
import Footer from './templates/components/footer'

import Messages from './templates/msg/message'
import Router from './routes'
export default props =>(

  <div className="wrapper">

    <Header />
    <Sidebar />
    <div className="content-wrapper">
     <Router/>
      </div>
    <Footer />
    <Messages/>
  </div>

)
