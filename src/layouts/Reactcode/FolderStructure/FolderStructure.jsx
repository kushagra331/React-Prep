import React, { useState } from 'react'
// import fileExplorer from './data'
function FolderStructure({fileExplorer}) {
  console.log(fileExplorer);
  const [expand,setExpand]=useState(false);

  if(fileExplorer.folderItems){
    return (
      <>
        <div style={{cursor: 'pointer'}}
        onClick={() => setExpand(!expand)}>
          {expand ? '⬇📂' : '➡📂'}
          {fileExplorer?.name}
        </div>
        <div style={{display: expand ? 'block':'none',
                    paddingLeft:'15px'}}>
          {
            fileExplorer?.folderItems?.map((i)=>{
              return <FolderStructure fileExplorer={i}></FolderStructure>
            })
          }
        </div>  
      </>
    );
  }else{
    return(
      <div>
        📑{fileExplorer?.name}
      </div>
    );
  }
  
}

export default FolderStructure
