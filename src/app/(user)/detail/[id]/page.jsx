"use client"


import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const DynamicProduct = () => {
    const [records, setRecords] = useState([]);
    const params = useParams();
    //instance
    const {id} = params;
    console.log("dynamic id :",id)
    const dynamicProductHanlder = async()=>{
        const response = await fecth(`http://localhost:3000/api/admin/add-product/${id}`)
        const newData =await response.json()
        setRecords(newData.data)
    }
    useEffect(()=>{
        dynamicProductHanlder()
    },[])



  return (
    <div>DynamicProduct</div>
  )
}

export default DynamicProduct