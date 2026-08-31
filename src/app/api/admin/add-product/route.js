import DBConnection from "@/app/utils/config/db";
import ProductModel from "@/app/utils/models/Product";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import path from 'path'

export async function GET(){
    await DBConnection();
    const records = await ProductModel.find({})
    return NextResponse.json({message: "Get request received, API SUUCESSFULLY returned "},{data:records, status:200})
    
    

}

export async function POST(request){
    await DBConnection();
    const data = await request.formData()
    const title = data.get ('title')
    const price = data.get('price')
    const offer = data.get('offer')
    const amen = data.get('amen')
    const desc = data.get('desc')
    const image = data.get('image')

    const bufferData = await image.arrayBuffer();
    const buffer = Buffer.from(bufferData);
    const imagePath = path.join(process.cwd(), 'public', 'uploads', image.name);

    try{

        await writeFile(imagePath, buffer);
        const newProduct = new ProductModel({
            title: title,
            price: price,
            offer:offer,
            amen:amen,
            desc:desc,
            image: `/uploads/${image.name}` 
        })
        await newProduct.save();
        return NextResponse.json({response:'successfully uploaded', success:true},
            {status:201}
        )
    }
    catch(error){
        return NextResponse.json({
            response:'error in uploafding', success:false},{status:500},)
    }
    

 

}