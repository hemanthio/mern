import React from 'react'
import { MdSearch } from "react-icons/md";

function App() {
  return (
   <>
  <div className='my-0 mx-auto max-w-screen-md h-screen  '>
    <div className='m-5  justify-center relative flex items-center '>
    <MdSearch size="xl" color='gray' className='absolute w-6 translate-x-28' />
    <div className='text-white rounded-full bg-search  px-14 py-2 pr-16'>BANOTH HEMANTH SAI</div>
    </div>
   
  </div>
   </>
  )
}

export default App