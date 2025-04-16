import React from 'react'

const StudentCard = ({name,myClass,showMyName}) => {
  return (
    <div
    style={{
        width:"20vw",
        height:"20vw",
        marginBottom:"1rem",
        borderRadius:"50%",
        background: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    }}
    onClick={()=>showMyName(name,myClass)}
    >{name}{"\n"}{myClass}</div>
  )
}

export default StudentCard