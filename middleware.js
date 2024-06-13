// import { NextResponse } from "next/server";

// export  function middleware (){
//     console.log('I am insied middleware');

//     return NextResponse.next()
//     // return NextResponse.json({
//     //     hello : 'I am happy jahid'
//     // })
// }


import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/gallery', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about', '/contact']// when hit '/about', '/contact'  path go to /gallery path
}