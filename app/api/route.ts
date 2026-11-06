import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export function GET(){
    console.log("Get Received")
}

// export async function POST(req: any){

//     const body = await req.json()
//     console.log(body)
//     console.log("Post recieved")
//     return NextResponse.json({
//         "mesage":"Req get /api"
//     })
// }

export async function POST(req: NextRequest){
    const body = await req.json()
    await prisma.student.create({
        data:{
            name: body.name,
            age : body.age,
            city : body.city
        }
    })
    return NextResponse.json({msg :"created"})
}