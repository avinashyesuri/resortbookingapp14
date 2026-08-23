"use server"

import { signIn } from 'next-auth/react'
import DBConnection from '../utils/config/db'
import UserModel from '../utils/models/Users'
// export const registerAction = 


export async function loginAction(userLoginData){
    await DBConnection()
    console.log("Login details:" , userLoginData)


    try{
        const response = await signIn("credentials",{
            email:userLoginData.email,
            password:userLoginData.passwrod,
            redirect:false
        })
         return  {success:true, mesaaage:"user registerd success"}
    }catch(error){

    }
    }
