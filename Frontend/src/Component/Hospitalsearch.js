import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Hospitalsearch = () => {
  
  // const [data , setdata] = useState([])

  // useEffect(()=>{
  //   const func  = async ()=>{
  //     const ayi = await axios.get('http://localhost:3001/data').then((res)=>{
  //       // console.log(res.data)
  //       setdata(res.data)
  //     })
  //   }

  //   func()
  // },[])
  // console.log(data)


  // const option = data.map((item)=>{
  //   return <option value={item.problem}>{item.problem}</option>
  // })

  return (
    <div className='hospital-search-box'>
        {/* <select name="" id="">
          {option}
        </select> */}
    </div>
  )
}

export default Hospitalsearch