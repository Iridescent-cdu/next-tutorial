import { verifyRequestOrigin } from 'lucia';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.method === 'GET') {
    return NextResponse.next()
  }
  const originHeader = request.headers.get('origin')
  const hostHeader = request.headers.get('host')
  if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
    return new NextResponse(null, {
      status: 403
    })
  }
  return NextResponse.next()
}

export const config = {

}
