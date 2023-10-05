import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'   
import { cookieParser } from "@/utils/cookieParser";

export async function POST(request: NextRequest) {

const body = await request.json()

  const res = await fetch("http://localhost:3100/api/v1/users/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include"
  });

    //@ts-ignore
    const cookie = res.headers.getSetCookie();
    //@ts-ignore
    const [cookieBody, cookieName] = cookieParser(cookie[0])
    
    cookies().set(cookieName, cookieBody)
  
  const data = await res.json()

  return NextResponse.json({ user: data, status: 200 });
}