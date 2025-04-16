import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentCard from './components/StudentCard'
import axios from 'axios'
import ProductCard from './components/ProductCard'
function App() {
  const [students,setStudents] = useState([
    {
      name:"Neo",
      class:"kalvium"
    },
    {
      name:"Hemanth",
      class:"kalvium"
    },
    {
      name:"Papan",
      class:"kalvium"
    }
  ])

  const [products,setProducts] = useState([]);
  const [visibility,setVisibility]=useState(true);

  async function fetchData() {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      console.log(data.data)
      setProducts(data.data);
    } catch (error) {
      console.log(error)
      alert("something went wrong while fetching data");
    }
  }

  useEffect(()=>{
    fetchData();
  },[])


  function showName(name){
    alert(`Hello ${name}`)
  }

  return (
    <>
      <div
      style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between"
      }}
      >
        <button
        onClick={()=>{
          setVisibility(!visibility)
        }}
        >{visibility?"Hide products":"Visible Products"}</button>
          <button
          onClick={
            ()=>{
              const filteredData = products.filter((ele)=>{
                return ele.price<100;
              })
              setProducts(filteredData)
            }
          }
          >Filter by price less than 200</button>
          {
            visibility?
            
              /* students.map((student)=>{
                 return <StudentCard ele={student}/>
               })*/
       
                /* students.map((student)=>(
                   <StudentCard key={student} ele={student} showMyName={showName}/>
                 ))*/
       
                  /* students.map((student)=>(
                     <StudentCard key={student} name={student.name} myClass={student.class} showMyName={showName}/>
                   ))*/
                  products.map((product)=>{
                   console.log(product)
                   return <ProductCard 
                   title={product.title} 
                   price={product.price} 
                   image={product.image}
                   description={product.description}
                   />
                   })
             :""
          }
      </div>
    </>
  )
}

export default App
