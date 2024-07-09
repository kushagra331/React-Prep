import React, { useEffect, useState } from 'react'

function InfiniteScroll() {
    const [apidata,setApidata]=useState([]);
    const [page,setPage]=useState(0);

    async function getdata(){debugger;
        const data = await fetch("https://jsonplaceholder.typicode.com/posts?"+
          new URLSearchParams({
            _limit: 6,
            page:page,
          })
        );
        const josndata = await data.json();
        setApidata([...olddata, ...josndata]);
        console.log("apidata=",josndata[0].title)
    }
    useEffect(()=>{
        getdata();
    },[page]);
    
    useEffect(()=>{
      window.addEventListener('scroll',handleScrollEvent);
    },[]);

    const handleScrollEvent=()=>{
      if(
        window.innerHeight + document.documentElement.scrollTop >= 
        document.documentElement.scrollHeight
      ){
        setPage((prev)=> prev+1);
      }
    }

  return (
    <div>
      <h1 className='mx-auto'>InfiniteScroll</h1>
      {
        apidata && apidata.map((curr)=>{
          return (
          <div key={curr.id} className='w-3/4 p-3 mx-auto border-2 rounded-md mb-1 border-slate-300'>
            <h2 className='font-bold'>{curr.title.substr(0,15)}</h2>
            <p>{curr.body}</p>
          </div>
          );
        })
      }  
    </div>
  )
}

export default InfiniteScroll
