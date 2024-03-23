import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavigationBar.css"
function NavigationBar() {

  let activeLink={
    color:"gold",
    fontWeight:"bold",
    fontSize:"17px"
}
let inactiveLink={
    color:"white",
}
  return (
    <div className='p-2 shadow n1'>
        <ul style={{justifyContent:'space-around'}} className='nav mt-2'>
            <li className='nav-item' ><NavLink className='navbar-brand'><img src="https://media.licdn.com/dms/image/D560BAQEG9avWAWpwTw/company-logo_200_200/0/1703486127113/tech_trove_logo?e=2147483647&v=beta&t=DuOy2uHO4p0hSfeySgobSnOIi4IrEk-KZlwEFaMVuBI" width="40px" height="40px" style={{borderRadius:"50%"}}></img></NavLink> <h3 className=' d-inline text-white' >TalentConnect</h3></li>
            <li className='nav-item'> <NavLink className='nav-link' to="/" style={({isActive})=>{
            return isActive?activeLink:inactiveLink
          }} >Home</NavLink></li>
            <li className='nav-item'> <NavLink className='nav-link' to="/login"style={({isActive})=>{
            return isActive?activeLink:inactiveLink
          }} >Login</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link ' to="/register" style={({isActive})=>{
            return isActive?activeLink:inactiveLink
          }}>Register</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link ' to="/aboutus" style={({isActive})=>{
            return isActive?activeLink:inactiveLink
          }}>AboutUs</NavLink></li>
           <li className='nav-item'> <NavLink className='nav-link' to="/userprofile" style={({isActive})=>{
            return isActive?activeLink:inactiveLink
          }} >My Profile</NavLink></li>
        </ul>
    </div>
  )
}

export default NavigationBar;