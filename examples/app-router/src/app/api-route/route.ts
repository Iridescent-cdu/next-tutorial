import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log('call', request)
  return NextResponse.json({}, { status: 200 })
}
export async function POST(request: Request) {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}


