import comment from "../data/coment"

export const  GET = async(request)=> {
    // return new Response('Fisrt api in next js in array function')
    const searchParams= request.nextUrl.searchParams
    const query= searchParams.get('query')
   
    if(query){

        const filteredComment= comment.filter(coment=> 
            coment.message.toLocaleLowerCase().includes(query)
        )
        return Response.json(filteredComment)
    }
    return Response.json(comment)
}
export const  POST = async(request)=> {
    const coment= await request.json()
    const newComment= {
        id : comment.length +1,
        message: coment.text
    }
    comment.push(newComment)
    // return Response.json(newComment)
    return new Response(JSON.stringify(newComment),{
        headers :{
            'content-type' : 'application/json'
        },
        status :201
        
    })
}