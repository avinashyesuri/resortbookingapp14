'use server'

import DBConnection from "../utils/config/db"

export async function bookingAction(bookingData){

    await DBConnection()
    console.log("server booking Details:",bookingData)
}