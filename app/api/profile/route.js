import { headers, cookies } from "next/headers";

export async function GET (request){

    // const requestHeaders= new Headers(request.headers)
    // console.log(requestHeaders);
    const headeList = headers()
    console.log(headeList);
    // console.log(requestHeaders.get('Authorization'))


    console.log(request.cookies);
    console.log(request.cookies.get('theme'));

    // ---------------------------------------------------------
    cookies().set('page', '2')
    console.log(cookies())
    console.log(cookies().get('page'))

    return new Response('working profile orute', {
        headers:{
            'set-cookie' : "theme=dark"
        }
    })
}