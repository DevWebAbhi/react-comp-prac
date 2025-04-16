import React from 'react'

const ProductCard = ({title,price,image,description}) => {
  return (
    <div
        style={{
            border:"1px solid",
            width:"20rem",
            height:"31rem",
            padding:"0.6rem",
            borderRadius:"0.3rem",
            margin:"auto",
            marginBottom:"1.5rem"
        }}
    >
        <img src={image} alt={title}
        style={{
            width:"15rem",
            height:"16rem"
        }}
        />
        <h3>{title}</h3>
        <p
        style={{
            height:"1.5rem",
            overflow:"hidden"
        }}
        >{description}</p>
        <p>{"$"+price}</p>
    </div>
  )
}

export default ProductCard