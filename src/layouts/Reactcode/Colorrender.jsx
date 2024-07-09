import { color } from 'framer-motion'
import React from 'react'
const colors=[
    {
        name:'Corn Flower Blue',
        hex: '#91A6FF'
    },
    {
        name:'Persian Pink',
        hex: '#FF88DC'
    },
    {
        name:'Screamin Green',
        hex: '#80FF72'
    },
    {
        name:'Tart Orange',
        hex: '#FF5154'
    },
]
function Colorrender() {
  return (
    <section className='main-div flex flex-col gap-2'>
        <h1 className='font-bold bg-orange-500'>Color Render</h1>
        <div className='answers flex gap-4'>
            {
                colors.map((res,index)=>{
                return (
                <div 
                className='flex w-96 h-96 '
                style={{backgroundColor:res.hex}} id={res.hex}>
                    <h1 className='m-auto'>{res.name}</h1>
                </div>
                )
                })
            }
        </div>
        <div className='answers'>
            
        </div>
    </section>
  )
}

export default Colorrender
