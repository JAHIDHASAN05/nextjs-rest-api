import { headers } from "next/headers";

export async function GET (request){

    // const requestHeaders= new Headers(request.headers)
    console.log(requestHeaders);
    const headeList = headers()
    console.log(headeList);
    // console.log(requestHeaders.get('Authorization'))

    return new Response('working profile orute')
}