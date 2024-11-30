
import { PrismaClient } from "@prisma/client";
import { verify } from "jsonwebtoken";

import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient
const jwt_secret : string = process.env.JWT_SECRET || ""


export async function POST(req : NextRequest){

    try{

    
        const body = await req.json()
        const todo = await client.todo.create({
            data : {
                title : body.title,
            }
        })
    
        return NextResponse.json({
            msg : "todo addded successfully",
            todo : todo
        })
    }catch(e){
        console.log(e)
        return NextResponse.json({
            msg : "error while adding todos"
        })
    }

}



export async function GET(req : NextRequest){
    try{

    

        const todos = await client.todo.findMany()
        console.log(todos)
        return NextResponse.json({
            todos : todos
        })

    }catch(e){
        console.log(e)
        return NextResponse.json({
            msg : "error while retreiving the todos"
        })
    }
}




export async function DELETE(req: NextRequest){
    const body = await req.json()
    const deleteuser = await client.todo.delete({
        where : {
            id : body.id
        }
    })

    return NextResponse.json({
        msg : "todos deleted"
    })
}




