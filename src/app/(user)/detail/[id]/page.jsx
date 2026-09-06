// "use client"


// import { useParams } from 'next/navigation';
// import React, { useEffect } from 'react'

// const DynamicProduct = () => {
//     const [records, setRecords] = useState([]);
//     const params = useParams();
//     //instance
//     const {id} = params;
//     console.log("dynamic id :",id)
//     const dynamicProductHanlder = async()=>{
//         const response = await fecth(`http://localhost:3000/api/admin/add-product/${id}`)
//         const newData =await response.json()
//         setRecords(newData.data)
//     }
//     useEffect(()=>{
//         dynamicProductHanlder()
//     },[])



//   return (
//     <div>DynamicProduct</div>
//   )
// }

// export default DynamicProduct




"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import CalenderComponent from '@/app/components/CalenderComponent'
import { bookingAction } from '../serverActions/bookingAction'
import { Circles } from 'react-loader-spinner'



const DynamicProduct = () => {
    const [record, setRecord] = useState("")

    const [selecetedDates, setSelectedDates] = useState(null)

    const params = useParams();

    const {id} = params

    console.log("dynamic ClientId:", id)

    const dynamicProductHandler = async()=>{
        
        const response = await fetch(`https://next-resort-project.vercel.app/api/admin/product/${id}`)
        const newData = await response.json()

        console.log("dynaic data:", newData)
        setRecord(newData.data)

    }

    useEffect(()=>{
        dynamicProductHandler()
    }, [])

    const bookingHandler = async()=>{
        if(!selecetedDates){
          alert("Please select booking dates")
          return
        }

          const bookingDetails = {record, selecetedDates}
      try {
        const response = await bookingAction(bookingDetails)
        if(response.success){
          alert("Booking Successfull")
        }
      } catch (error) {
        
      }

    }

    const handleDateSelect = (dates)=>{
        setSelectedDates(dates)
        console.log("dates coming from calenderComp:", dates)
    }

  return (
    <div>
        <CalenderComponent onDatesSelect={handleDateSelect}/>
        <Link href="/">
        <p align="center">Go Back</p>
        </Link>
      {record? 
         (<div className="">
            <div className="singleSection">
            <div className="singleLeft">
              <div className="">
               <h2>{record.title}</h2>
              </div>
              <img src={record.image} alt={record.title} className="singleImage"/>
              </div>
              <div className="singleCenter">
               <div className="singlePrice">Rs.{record.price}</div>
               <p className="singleDesc">{record.desc}</p>
               <div className="">
                   {record.amen.map((item, i)=>{
                       return(
                           <div className="singleAmen"  key={i}>
                              <span>*</span> {item}
                           </div>
                       )
                   })}
               </div>
               <div className="offer">
               <span>*</span>
                  <button>  Discount {record.offer}</button>
               </div>
               <div className="singleBtn">
                   <button className="" onClick={bookingHandler}  >Book Now</button>
               </div>
              </div>
            </div>

           </div>)
        :<h1 style={{position:'absolute', top:'50%', left:'50%'}}>    <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></h1>}
</div>
  )
  
  
}

export default DynamicProduct