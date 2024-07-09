import React, { useState } from 'react'

function MyAccordion({id,question,answer}) {
    const [show,setShow]=useState(false)
  return (
    <>
        <div className='main-heading'>
            <h3>{question}</h3>
            <p onClick={()=>{
                setShow(!show)
            }}>{show ? '⬆️' : '⬇️'}</p>
        </div>
        {show  && (
                <div className='answers' dangerouslySetInnerHTML={{ __html: answer }}></div>
            )}
    </>
  )
}

export default MyAccordion
