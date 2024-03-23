import axios from 'axios';
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
function Register() {

  let [success,setSuccess]=useState("")
  let [err,setError]=useState("")
   let navigateToLogin= useNavigate()

 let {register,handleSubmit,formState:{errors}}=useForm()
 let addUser=(userObj)=>{
        console.log(userObj);
        axios.post("http://localhost:3500/users-api/user-register",userObj)
        .then((response)=>{
           if(response.status===200){
              setSuccess("Registration Sucessful. Redirecting to login...");
              setTimeout(() => {
                navigateToLogin("/login");
              }, 2000);
           }
           else{
            setError(response.data.message)
           }
        })
        .catch(err=>{
          if (err.response) {
            setError(err.response.data.message);
          } else {
            setError("An error occurred. Please try again.");
          }
        })
 }
 


  return (
    <div className='container '>
      <div className='row'>
        <h3 className='text-success text-center display-5 mt-3'>Register</h3>
        {err.length!==0&&(<p className='text-center text-danger'>{err}</p>)}
        {success.length!==0&&(<p className='text-center text-success display-6'>{success}</p>)}
        <form action="/" className='col-11 col-sm-8 col-md-6 mx-auto shadow p-3 bg-light mb-5' onSubmit={handleSubmit(addUser)}>
            <div className='mt-3'>
              <label htmlFor="username">Username</label>
              <input type="text"  id='username' {...register('username',{required:true,minLength:"4",maxLength:"20"})} className='form-control'/>
              {errors.username?.type==="required" && <p className='text-danger'>*Username is required</p>}
              {errors.username?.type==="minLength"&&<p className='text-danger'>*Username should be atleast 4 characters</p>}
              {errors.username?.type==="maxLength"&&<p className='text-danger'>*Username should be max 6 characters</p>}
            </div>
            <div className='mt-3'>
            <label htmlFor="email">Email</label>
<input
  type="email" placeholder='example123@gmail.com'
  className="form-control mb-3"
  {...register("email", {
    required: true,
    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
  })}
/>
{errors.email?.type === "required" && (
  <p className="text-danger">*Email is required</p>
)}
{errors.email?.type === "pattern" && (
  <p className="text-danger">*Please enter a valid email address</p>
)}
            </div>

            <div className=' mt-3'>
              <label htmlFor="">Gender</label>
              <div className='form-check'><input type="radio"  value='male' className='form-check-input' {...register('gender', {required:true})}  />
              <label htmlFor="male"  className='form-check-label' >Male</label></div>
            <div className='form-check'><input type="radio"  value='female' className='form-check-input'{...register('gender', {required:true})} />
            <label htmlFor="female" className='form-check-label'  >Female</label>
            {errors.gender?.type==="required" && <p className='text-danger'>*Select your Gender</p>}
            </div>
            
            </div>
            
            <div className='mt-3'>
              <label htmlFor="stream">Stream</label>
              <select id="stream" className='form-select' defaultValue="" {...register('stream',{required:true})}>
                <option value="" disabled> Select your Stream</option>
                <option value="artist">Artist</option>
                <option value="storywriter">StoryWriter</option>
                <option value="developer">Developer</option>
                {errors.stream && <p className='text-danger'>*Select a stream</p>}
              </select>
             
            </div>

          
            <div className='mt-3'>
              <label htmlFor="password">Password</label>
              <input type="password" id='password'{...register('password',{required:true,minLength:"8"})} className='form-control'/>
              {errors.password?.type==='required'&& <p className='text-danger'>*Password is required</p>}
          {errors.password?.type==='minLength'&&<p className='text-danger'>*Password must be atleast 8 characters long</p>}

            </div>
            <button type='submit' className='btn btn-success mt-3' >Submit</button>
        </form>
      </div>
     
       
    </div>
  )
}
export default Register;