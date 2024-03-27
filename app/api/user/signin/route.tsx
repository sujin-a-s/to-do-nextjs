import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
const jwt_secret : string = process.env.JWT_SECRET || ""
const client = new PrismaClient

export async function POST(req : NextRequest){
    try{
        const body = await req.json()
        const todoUser = await client.user.findFirst({
            where : {
                email : body.email,
                password : body.password
            }
        })
        if(!todoUser){
            return NextResponse.json({
                msg : "not registered yet. Please Sign up"
            })
        }
    
        const token = sign({userId : todoUser.id},jwt_secret)
        const response = NextResponse.json({
            msg : "signed in succesfully",
            token : token
        })
        response.cookies.set("id",token)
        return response
    }catch(e){
        console.log(e)
        return NextResponse.json({
            msg :"error while signing in "
        })
    }
}


