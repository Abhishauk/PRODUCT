import React, { useState } from 'react'

const SignUp = () => {
    const [formdata , setFormdata] = useState({
        name : '',
        email : '',
        password : '',
        location : ''
        
    })
    const handleChange = (e) => {
        setFormdata({...formdata , [e.target.name] : e.target.value});
    }
    const handleSignup  = () => {
      
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 '>
        <form
          onSubmit={handleSignup}
          className='bg-white p-6 rounded-lg shadow-md w-90 max-w-md'
          >
            <h2 className="text-2xl font-bold mb-6 text-center"> Signup </h2>
            <div className='mb-6'>
                <input
                type='text'
                placeholder='Enter the Name'
                name= 'name'
                value={formdata.name}
                onChange={handleChange}
                className='p-3 border rounded-lg focus:outline-none'
                />
            </div>
            <div className='mb-6'>
                <input
                type='text'
                placeholder='Enter the Email'
                name= 'email'
                value={formdata.email}
                onChange={handleChange}
                className='p-3 border rounded-lg focus:outline-none'
                />
            </div>
            <div className='mb-6'>
                <input
                type='text'
                placeholder='Enter the Location'
                name= 'location'
                value={formdata.location}
                onChange={handleChange}
                className='p-3 border rounded-lg focus:outline-none'
                />
            </div>
            <div className='mb-6'>
                <input
                type='text'
                placeholder='Enter the Password'
                name= 'password'
                value={formdata.password}
                onChange={handleChange}
                className='p-3 border rounded-lg focus:outline-none'
                />
            </div>
            <button 
            type='submit'
            className='w-60 bg-pink-400 text-white py-3 rounded-lg font-semibold hover:bg-pink-300 transition-colors'
            >Signup</button>
        </form>
      
    </div>
  )
}

export default SignUp
