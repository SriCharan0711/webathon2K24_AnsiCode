import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {

 let navigate=useNavigate()

 let goToSignup=()=>{
  navigate('/register')
 }

  return (
    <div>
        <h1 className='mt-3'>Welcome to TalentConnect</h1>
        <p>Empowering collaboration and innovation through decentralization</p>
        <div className='d-flex gap-5'>
        <img src='https://th.bing.com/th/id/OIG1.N0nIwRij_LpPySNagArs?pid=ImgGn' width="300px" height="300px"></img>
        <div> 
          <h2>Decentralised Identity</h2>
          <p>Manage your digital identity securely and privately.</p>
        </div>
        </div>
        
        <div className='d-flex mt-5 gap-5'>
        <div>
        <h2>Portfolio and Skill Showcase</h2>
        <p>Showcase your skills and achievements in a verifiable manner.</p>
       </div>
       <img className='img-fluid' src="https://th.bing.com/th/id/OIG4.cMMWLQ_M2Fz83rB4Aqx.?w=1024&h=1024&rs=1&pid=ImgDetMain" width="300px" height="300px"></img>
        </div>
       
        <div className='d-flex gap-5 mt-5'>
          <img src='https://th.bing.com/th/id/OIG4.FzGRxw26SuBMgslkzUzC?pid=ImgGn' width='300px' height='300px'></img>
          <div>
          <h2>Tokenization of Skills and Contributions</h2>
          <p>Earn tokens for your contributions and skills.</p>
          </div>
        </div>
       
        <h2 className='mt-5'>Ready to Join TalentConnect</h2>
        <div className='text-center'>
        <button className='btn btn-primary mb-5' onClick={goToSignup}>Sign Up Now</button>

        </div>
    </div>
  )
}

export default Home