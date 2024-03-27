import { PrismaClient } from "@prisma/client"
import { verify } from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"
const client = new PrismaClient
const jwt_secret : string = process.env.JWT_SECRET || ""

export async function PUT(req:NextRequest){
    try{
        const token = req.cookies.get("id")?.value 
        if(!token){
            return NextResponse.json({
                msg : "access denied"
            })
        }
        
        const decodedToken = verify(token, jwt_secret) as { userId: number } | undefined;
        console.log(decodedToken)
        if(!decodedToken){
            return NextResponse.json({
                msg : "invalid token"
            })
        }
        const body = await req.json()

        const updatedUser = await client.user.update({
            where : {
                id : decodedToken.userId
            },
            data : {
                name : body.name,
                password : body.password
            }
        })

        return NextResponse.json({
            msg : "updated succesfully",
            user : updatedUser
        })

    }catch(e){
        console.log(e)
        return NextResponse.json({
            msg : "error while updating"
        })
    }
}


