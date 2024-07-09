import React, { useState } from 'react'

function Todo() {
  const [tasks,setTasks]=useState(["kush","kanu","shri"]);
  const [input,setInput]=useState('');
  const [edittask,setEdittask]=useState(true);
  return (
    <div>
      <h1>Todo App</h1>
        <input type="text" value={input} onChange={(e)=>{
            setInput(e.target.value)
        }}/>
        <button className='border-blue-500 border-2 p-1'
        onClick={()=>{
            setTasks([...tasks,input]);
            setInput('')
        }}
        >Add Task</button>
        {
            tasks.map((curr,i)=>{
                return ( 
                    <div className='flex gap-6 items-center justify-center' key={i}>
                        {
                            edittask ? (
                            <div>
                                <button className='border-blue-500 border-2 p-1'
                                onClick={()=>{
                                    //setSavetask()
                                }}>Save</button>
                            </div>
                            ) : (
                                <div>

                                </div>
                            )
                        }
                        
                        <button className='border-blue-500 border-2 p-1'
                                onClick={()=>{
                                    setEdittask(!edittask);
                        }}>Edit</button>
                        <li key={curr}>{curr}</li>
                        <button className='border-blue-500 border-2 p-1'
                        onClick={()=>{
                            setTasks(tasks.filter((val)=> val!=curr))
                        }}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}
export default Todo;
