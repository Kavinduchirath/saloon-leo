import { NextResponse } from "next/server"

export function GET(){
    console.log("Get Received")
}

export async function POST(req: any){

    const body = await req.json()
    console.log(body)
    console.log("Post recieved")
    return NextResponse.json({
        "mesage":"Req get /api"
    })
}