import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import './UserProfile.css'
function UserProfile() {
  return (
    <div>
      <button className='btn shadow btn-warning  mt-3'><IoAddOutline style={{fontSize:"24px"}} />Add Work</button>
      <h3 className='mt-4'>My Work</h3>
      <div className='container'>
      <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div  className="card shadow">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*4TJ-21e1MktGTwstdhPfmA.png" className="card-img-top b1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">What's Cooking</h5>
        <button className='btn btn-primary float-end'>View</button>
        <div className='text-center'>
       

        </div>
      </div>
    </div>
    
   
  </div>
  <div className="col">
    
    <div className="card shadow">
      <img src="https://w3layouts.com/wp-content/uploads/2022/07/Blog-Store-Website-Template-scaled.jpg" className="card-img-top b2" alt="..."/>
      <div className="card-body ">
        <h5 className="card-title">Blog Website</h5>
        <div className='text-center'>
        <button className='btn btn-primary float-end'>View</button>

        </div>

      </div>
    </div>
    
   
  </div>
  <div className="col">
   
    <div className="card shadow">
      <img src="https://uifresh.net/wp-content/uploads/2021/11/quiz-app-banner1-1-e1636184882194.png" className="card-img-top b3" alt="..."/>
      <div className="card-body ">
        <h5 className="card-title">Quiz App</h5>
        <div className='text-center'>
        <button className='btn btn-primary float-end'>View</button>

        </div>

      </div>
    </div>
  
   
  </div>
  <div className="col">
    
    <div className="card shadow">
      <img src="https://themes.getbootstrap.com/wp-content/uploads/2022/07/FreshCart-eCommerce-HTML-Template.jpg" className="card-img-top b4" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">E-commerce</h5>
        <div className='text-center'>
        <button className='btn btn-primary float-end'>View</button>

        </div>

      </div>
    </div>
    
    
  </div>
  <div className="col">
    
    <div className="card shadow">
      <img src="https://uploads-ssl.webflow.com/62b2e5c261a2f0c59d918f68/63ca75c3b7df1d1f392cda49_To-Do%20list.webp" className="card-img-top b5" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">To Do List</h5>
        <div className='text-center'>
       
        <button className='btn btn-primary float-end'>View</button>
        </div>

      </div>
    </div>
  
   
  </div>
  <div className="col">
    
    <div className="card shadow">
      <img src="https://img.freepik.com/premium-vector/fitness-tracker-vector-website-landing-page-design-template_103044-3239.jpg" className="card-img-top b6" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Fitness Tracker</h5>
        <div className='text-center'>
        <button className='btn btn-primary float-end'>View</button>

        </div>

      </div>
    </div>
    </div>
   
  </div>
      </div>
     

</div>

  )
}

export default UserProfile