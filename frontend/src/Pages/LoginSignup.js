import React, { useState } from 'react'

const LoginSignup = () => {

  const [state, SetState] = useState('Login');
  const [formData,setFormData] = useState({
    username:'',
    password:'',
    email:''
  })

  const ChangeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async () => {
    console.log('login',formData);
    let responseData;
    await fetch('https://ecommerce-8dzq.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((resp)=>resp.json()).then((data)=>responseData=data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log('signup',formData);
    let responseData;
    await fetch('https://ecommerce-8dzq.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((resp)=>resp.json()).then((data)=>responseData=data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='flex flex-col gap-4 mx-auto my-12 p-6 sm:p-8 rounded-lg hover:drop-shadow-xl bg-[#ffe2e2] max-w-lg w-full'>
  <div className='text-3xl font-bold'>{state}</div>
  <div className='flex flex-col gap-5 items-center text-xl'>
    {state === 'Sign Up' ? (
      <input
        className='px-4 py-3 rounded-lg w-full hover:drop-shadow-md'
        type='text'
        name='username'
        value={formData.username}
        onChange={ChangeHandler}
        placeholder='Your Name'
      />
    ) : (
      <></>
    )}
    <input
      className='px-4 py-3 rounded-lg w-full hover:drop-shadow-md'
      type='text'
      name='email'
      value={formData.email}
      onChange={ChangeHandler}
      placeholder='Email'
    />
    <input
      className='px-4 py-3 rounded-lg w-full hover:drop-shadow-md'
      type='password'
      name='password'
      value={formData.password}
      onChange={ChangeHandler}
      placeholder='Password'
    />
    <button
      onClick={() => {
        state === 'Login' ? login() : signup();
      }}
      className='px-6 py-3 rounded-lg w-full sm:w-[40%] bg-[#6fe28a] border-2 transition duration-200 hover:scale-105 hover:drop-shadow-lg hover:border-[#50e17d] hover:bg-white'
    >
      Continue
    </button>
  </div>
  {state === 'Sign Up' ? (
    <div>
      Already have an account?{' '}
      <span
        className='font-semibold text-red-500 hover:cursor-pointer'
        onClick={() => {
          SetState('Login');
        }}
      >
        Login Here
      </span>
    </div>
  ) : (
    <div>
      Create an account?{' '}
      <span
        className='font-semibold text-red-500 hover:cursor-pointer'
        onClick={() => {
          SetState('Sign Up');
        }}
      >
        Click Here
      </span>
    </div>
  )}
  <div className='flex gap-3'>
    <input type='checkbox' name='' id='' />
    <p>By Continuing I agree to the terms of use & privacy policy.</p>
  </div>
</div>

  )
}

export default LoginSignup