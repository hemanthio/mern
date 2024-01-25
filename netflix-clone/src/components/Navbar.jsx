import React from 'react'

const Navbar = () => {
  return (
   <>
   
   <div className='text-white w-full flex justify-between items-center  z-[100]' >
    <h1 className='text-red-600 text-3xl font-bold cursor-pointer'>NETFLIX</h1>
    <div className='flex gap-3'>
        <button className='text-white pr-4'>Sign In</button>
        <button className='text-white bg-red-600 rounded-sm 
        cursor-pointer px-2 py-1 '> Sign Up</button>
    </div>
   </div>
   </>
  )
}

export default Navbar