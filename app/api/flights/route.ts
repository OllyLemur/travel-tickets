import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const {
    nextUrl: { search },
  } = req;
  const urlSearchParams = new URLSearchParams(search);

  const dateFrom = urlSearchParams.get("from");
  const dateTo = urlSearchParams.get("to");
  const location = urlSearchParams.get("location");
  const destination = urlSearchParams.get("destination");
  
  const res = await fetch(
    `http://localhost:3100/api/vi/flights/?to=${dateTo}&from=${dateFrom}&location=${location}&destination=${destination}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if(res.ok) {
const data = await res.json();

  return NextResponse.json({ flights: data, status: 200 });
  } else {
    return NextResponse.json({status: 404, message: "Can'not find flights at this dates"})
  }
}
