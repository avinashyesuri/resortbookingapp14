"use client"
import { se } from 'date-fns/locale';
import React, { useState } from 'react'
import {DateRange} from 'react-date-range'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const CalenderComponent = () => { 
    
    const [showCalender, setshowCalender]= useState(false)
    const [Daterange, setDaterange] = useState([
    {
      startDate: new Date(),
    //   endDate: null,
      endDate: new Date(),
      key: 'selection'

    }
  ]);

    const [selectedDates, setSelectedDates] = useState(null)
    const handleSelectedDates = async()=>{
      const startDate = Daterange[0].startDate.toLocaleDateString()
      const endDate = Daterange[0].endDate.toLocaleDateString()

      setSelectedDates(`selected dates:${startDate} to ${endDate}`)
      const bookingDates = {startDate, endDate}
      console.log("selected dates:", bookingDates)
      setshowCalender(false)
//till hjere we are able to slect the dates and display on the screen by selecting fromthe  calender 
    }

    const currentDate =new Date().toDateString()
    const nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + 1)
    const FormatedDate = nextDate.toDateString()
// this is like dummy dates visual 


  return (
  <div className="calenderSection">
      {/* <button onClick={()=>setshowCalender(!showCalender)}>Show Calender</button> */}

      <div className="currentDate" onClick={()=>setshowCalender(!showCalender)}>
        {/* here we r using toggle calender shown  */}
          {!selectedDates && (
            <>
              {`${currentDate} - ${FormatedDate}`}
            </>
          )}
          {selectedDates && (
            <div className="currentDate" style={{color:red}}>
                  {selectedDates}
            </div>
          )}

      </div>
      {showCalender &&   
       <DateRange
        editableDateInputs={true}
        onChange={item => setDaterange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={Daterange}
        className= 'dateRange'
        />}
      <button onClick={handleSelectedDates}>select dates
      </button>

    
    </div>
  )
}

export default CalenderComponent