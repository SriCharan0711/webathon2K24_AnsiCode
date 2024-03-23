import React from 'react'
import {useForm} from 'react-hook-form'
import { loginContext } from '../contexts/loginContext'
import { useNavigate } from 'react-router-dom'
import { useContext,useEffect } from 'react'
function Login() {


  let goToUserProfile=useNavigate()

 // let [currentUser,loginErr,userLoginStatus,loginUser]=(useContext(loginContext))

  let {register,handleSubmit,formState:{errors}}=useForm()
  let handleSubmitUser=(userCredentialObj)=>{
   // loginUser(userCredentialObj)
  }

  

  return (
    <div className='container'>
       <div className='row'>
        <h3 className='text-success display-5 text-center mt-2'>Login</h3>
       {/* {loginErr.length!==0&&(<p className='text-danger text-center'>{loginErr}</p>)} */}
        <form onSubmit={handleSubmit(handleSubmitUser)} className='col-11 col-sm-8 col-md-6 mx-auto bg-light shadow p-3'>
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
            <label className='mt-3'>Password</label>
            <input type='password' className='form-control'{...register("password",{required:true})}></input>
            {errors.password?.type==='required'&& <p className='text-danger'>*Password is required</p>}
            <button  type='submit' className='btn btn-primary mt-3'>Login</button>
          </form>
       </div>
    </div>
  )
}

export default Login