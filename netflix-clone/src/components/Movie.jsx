import React from 'react'

function Movie({item,id}) {
  return (
 <>
 <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2   '>
    <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
    
     </div>
 </>
  )
}

export default Movie