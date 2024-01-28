import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

function Row({title,fetchURL}) {
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
setMovies(response.data.results)
    })
  },[fetchURL])

  const slideLeft =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const  slideRight = ()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }


  return (
   <>
   <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
   <div className='relative flex items-center group '>
    <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full 
    cursor-pointer z-10 left-0 hidden opacity-50 hover:opacity-100 group-hover:block ' />
    <div id={'slider'} className='w-full h-full overflow-x-scroll
     whitespace-nowrap scroll-smooth scrollbar-hide'>
{movies.map((item,id)=>(
     <Movie item={item} key={id}/>
))}
    </div>
    <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full 
    cursor-pointer right-0 z-10 hidden opacity-50 hover:opacity-100 group-hover:block' />
   </div>
   </>
  )
}

export default Row