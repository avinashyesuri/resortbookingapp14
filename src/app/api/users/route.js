import DBConnection from '@/app/utils/config/db';
import UserModel from '@/app/utils/models/Users';
import {NextResponse} from 'next/server'


export async function GET(){
    await DBConnection();

    try{
        const users =await UserModel.find({role:{$ne:'admin'}}, {password:0})
        if(!users){
            return NextResponse.json({success:false,message:'no users found '},{status:404})
        }
        return NextResponse.json({success:true,users},{status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({success:false,message:'error occurred'},{status:500})
    }

}