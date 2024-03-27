import { verify } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
const jwt_secret : string = process.env.JWT_SECRET || ""

export function authMiddleware(req : NextRequest){
    const pathName = req.nextUrl.pathname
    const isPathName = pathName === "/signup" ||  pathName === "/signin"
    const token = req.cookies.get("id")?.value || ""
    
    if (isPathName && token) {
        return NextResponse.redirect(new URL("/todo",req.nextUrl))
    }
    if (!isPathName && !token) {
        return NextResponse.redirect(new URL("/signin",req.nextUrl))
    }

}

export const config = {
    matcher : [
       "/todo",
    ]
}