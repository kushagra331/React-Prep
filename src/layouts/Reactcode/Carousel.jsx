import React, { useState } from 'react'
const imagedetails=[
    {
        title:"Smokey",
        imgpath:"https://rukminim1.flixcart.com/image/300/300/kph8h3k0/poster/e/w/4/large-adorable-cat-poster-cute-kittens-poster-cat-poster-funny-original-imag3p7tcxuzhpn2.jpeg",
        desc: "Cats are connoisseurs of comfort"
    },
    {
        title:"Bella",
        imgpath:"https://rukminim1.flixcart.com/image/300/300/l3khsi80/poster/t/d/b/small-cute-cat-poster-multicolor-photo-paper-print-poster-cute-original-imagezffcmvryfk8.jpeg",
        desc: "In ancient times cats were worshipped as gods, they have not forgotten this"
    },
    {
        title:"Simba",
        imgpath:"https://static.vecteezy.com/system/resources/previews/031/348/535/large_2x/cute-small-fluffy-kitten-with-beautiful-eyes-is-sitting-or-resting-british-shorthair-cat-day-concept-by-ai-generated-free-photo.jpg",
        desc: "Time spent with cats is never wasted"
    }
];
function Carousel() {
    const [value,setValue]=useState(1);
  return (
    <div className='flex'>
      <button className='border-blue-500 border-2 w-12 h-8'
      onClick={()=>{
        if(value==0) setValue(2) 
        else setValue(value-1)
      }}
      >Prev</button>
        <div className='w-96 flex flex-col justify-center items-center'>
            <h1>{imagedetails[value].title}</h1>
            <img src={imagedetails[value].imgpath} alt="dfd" />
            <h2>{imagedetails[value].desc}</h2>
        </div>
      <button className='border-blue-500 border-2 w-12 h-8'
      onClick={()=>{
        if(value==2) setValue(0) 
        else setValue(value+1)
      }}
      >Next</button>
    </div>
  )
}

export default Carousel
