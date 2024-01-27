import React from 'react'
import { MdSearch } from "react-icons/md";  
import header2 from '../assets/header2.webp'
import header from '../assets/header.png'
import figma from '../assets/figma.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import vscode from '../assets/vscode.png'

function Page() {
  return (
    <>
       <div className='my-0 mx-auto max-w-screen-md h-screen mb-48 '>
    <div className='m-5  justify-center relative flex items-center '>
    <MdSearch size="xl" color='gray' className='absolute w-6 translate-x-28' />
    <div className='text-white rounded-full bg-search  px-14 py-2 pr-16'>BANOTH HEMANTH SAI</div>
    </div>

<div>
    <img src={header2} alt="" className='rounded-xl max-sm:h-screen sm:w-screen'/>
</div>


    <div className='grid grid-cols-1 md:grid-cols-3 my-3 '>
        <div className='md:col-span-1   mr-2 rounded-lg'>
            <img src={header} alt="" className='object-cover rounded-lg'/>
        </div>
        <div className='md:col-span-2 bg-gray-300 rounded-lg'>
            <h1 className='m-2 text-sm'>About</h1>
            <p className='text-xs px-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it
                   to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially 
                    unchanged.  </p>
        </div>
    </div>

{/* projects */}

<div>
    <h1 className='text-white text-center'>Projects</h1>
    {/* iamges */}
    <div className=''>

    </div>
</div>
   
  </div>
    </>
  )
}

export default Page