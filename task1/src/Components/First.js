import React, { useRef } from 'react'


//simple ref function



const First = () => {
const fileref=useRef();

const getref=()=>{
    fileref.current.click();
}
  return (
    <>
    <input type="file" style={{display:"none"}} ref={fileref} />
    <button onClick={getref}>select</button>
    </>
  )
}

export default First