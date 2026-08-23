"use server"

import DBConnection from '../utils/config/db'
import UserModel from '../utils/models/Users'
// export const registerAction = 


export async function registerAction(userRegisteredData){
    await DBConnection()
    console.log("register details:" , userRegisteredData)

    try{
        await UserModel.create({
            username:userRegisteredData.username,
            email:userRegisteredData.email,
            password:userRegisteredData.password    
        })
        return  {success:true, mesaaage:"user registerd success"}

    }catch(error){
        console.log("error")
    }
}