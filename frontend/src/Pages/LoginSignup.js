import React from 'react'

const LoginSignup = () => {
  return (
    <div className='flex flex-col gap-4 mx-[400px] my-[100px] p-8 rounded-lg hover:drop-shadow-xl bg-[#ffe2e2]'>
      <div className='text-3xl font-bold'>Sign Up</div>
      <form className='flex flex-col gap-5 items-center text-xl'>
        <input className='px-2 py-3 rounded-lg w-[100%] hover:drop-shadow-md' type='text' placeholder='Your Name'/>
        <input className='px-2 py-3 rounded-lg w-[100%] hover:drop-shadow-md' type='text' placeholder='Email'/>
        <input className='px-2 py-3 rounded-lg w-[100%] hover:drop-shadow-md' type='text' placeholder='password'/>
        <button className='px-1 py-2 rounded-lg w-[40%] bg-[#6fe28a] border-2 transition duration-200 hover:scale-105 hover:drop-shadow-lg hover:border-[#50e17d] hover:bg-white ' type='Submit'>Continue</button>
      </form>
      <div >Already have an account? <span className='font-semibold text-red-500'>Login Here</span></div>
      <div className='flex gap-3'>
        <input type='checkbox' name='' id='' />
        <p>By Continuing I agree to the terms of use & privacy ploicy.</p>
      </div>
    </div>
  )
}

export default LoginSignup