import React from 'react'
import NavigationBar from './components/NavigationBar'
import LeftMenu from './components/LeftMenu'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
    <NavigationBar/>
    <div className='row'>
      <div className='col-lg-3'> <LeftMenu/></div>
      <div className='col-lg-9'><Outlet/></div>
    
    </div>
    
    
    </div>
  )
}

export default RootLayout