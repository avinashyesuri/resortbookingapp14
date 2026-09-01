import DBConnection from "@/app/utils/config/db";
import {NextResponse} from 'next/server'
import UserModel from "@/app/utils/models/Users";

export async function GET(request, {params}){
//here we call req and parameters aswell 
    await DBConnection()
    const {id} = params
    console.log("dynamic id:", id)

    try{
        if(!id){
            return NextResponse.json({success:false, message:'no user found '}, {status:404})
        }
        const user = await UserModel.findById(id, {password:0})
        return NextResponse.json({success:true, message:'user found', data:user}, {status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({success:false,message:'error occurred'},{status:500})
    }

    }
