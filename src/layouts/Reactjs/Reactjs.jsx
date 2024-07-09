import React from 'react'
import { useState } from 'react';
import { questions } from './Rdata';
import MyAccordion from '../MyAccordion';
import "./Reactjs.css"
function Reactjs() {
  const [data]=useState(questions);
  return (
    <section className='main-div'>
        <h1 className='font-bold'>React question & answer</h1>
        {
          data.map((curr)=>{
            return <div>
              <MyAccordion key={curr.id} {...curr}/>
            </div> 
          })
        }
    </section>
  )
}
export default Reactjs
