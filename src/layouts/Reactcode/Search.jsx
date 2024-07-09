import React, { useState } from 'react'
const searchList=["shubham","kushagra","shri","kanu","shrivastava","bittu","yosh","manoj","kush"];
function Search() {
    const [input,setInput]=useState('');
    const filtered=searchList.filter((curr)=>{
        return curr.toLowerCase().includes(input.toLowerCase());
    });
    return (
        <div>
            <h1>Search Component</h1>
            <input type="search" value={input} 
            onChange={(e)=>{
                setInput(e.target.value);
            }}
            placeholder='Search here...' id="" />
            <div>
                {
                    filtered && filtered.map((curr,i)=>{
                        return <li key={i}>{curr}</li>
                    })
                }
            </div>
            
        </div>
  )
}
export default Search;