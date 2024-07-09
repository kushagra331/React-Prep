import React, { useState } from 'react'
import MyAccordion from '../MyAccordion'
import { questions } from './JSdata'
import "./javascript.css"
function Javascript() {
    const [data]=useState(questions);
  return (
    <section className='main-div'>
        <h1 className='font-bold'>Javascript Question & Answer</h1>
        {
          data.map((curr)=>{
            return <div key={curr.id}>
              <MyAccordion  {...curr}/>
            </div> 
          })
        }
    </section>
  )
}

export default Javascript
