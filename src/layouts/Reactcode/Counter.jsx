import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(1);
  return (
    <div>
        <h1>Counter App</h1>
        <div className='flex gap-6'>
            <button className='border-blue-500 border-2 p-1'
            onClick={()=>{
                if(count!=0) setCount(count-1);
            }}
            >Decrement</button>
            <h6>{count}</h6>
            <button className='border-blue-500 border-2 p-1'
            onClick={()=>{
                if(count!=10) setCount(count+1);
            }}
            >Increment</button>
        </div>
    </div>
  )
}
export default Counter;