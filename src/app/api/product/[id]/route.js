import DBConnection from "@/app/utils/config/db";
import {NextResponse} from 'next/server'
import ProductModel from "@/app/utils/models/Product";

export async function GET(request, {params}){

    await DBConnection()
    const {id} = params
    console.log("dynamic id:", id)

    try{
        if(!id){
            return NextResponse.json({success:false, message:'no Product  found '}, {status:404})
        }
        const user = await ProductModel.findById(id)
        return NextResponse.json({success:true, message:'Product found', data:user}, {status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({success:false,message:'error occurred'},{status:500})
    }

    }
