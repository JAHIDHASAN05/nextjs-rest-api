import comment from "../data/coment"

export const  GET = async()=> {
    // return new Response('Fisrt api in next js in array function')
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