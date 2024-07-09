import React, { useRef } from 'react'

function Darkmode() {
    const handleclick=()=>{

    }
    const ref=useRef()
  return (
    <section className='main-div h-screen'>
        <h1 className='font-bold'>Dark Mode</h1>
        <div className='flex gap-4 justify justify-around'>
            <button className='border-black border-2 p-4'
            onClick={handleclick} ref={ref}
            >Light</button>
            <button className='border-black border-2 p-4 bg-black text-white'
            >Dark</button>
        </div>
         
         <div className='bg-gray-500 grid place-items-center h-screen'>
            <div className='max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden'>
              <div className='flex justify-between px-4 text-white text-xs items-center'>
                <p className='text-sm'>Example Code</p>
              </div>
              <button className='py-1 inline-flex items-center gap-1'>
                Copy Code
              </button>
              {"kushagra"}
            </div>
         </div>

         <pre>
          <code>
            let a=1
            let v=3
          </code>

         </pre>
    </section>
  )
}

export default Darkmode
