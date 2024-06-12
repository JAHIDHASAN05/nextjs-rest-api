import comment from "../../data/coment";

export async function GET (_request, {params}){
    const commentId= params.id
    const coment = comment.find(comment=> comment.id === parseInt(commentId))
    return Response.json(coment)
}
export async function PATCH (request, {params}){
    const updatedComment= await request.json()
    const commentId= params.id
    const commentIndex = comment.findIndex(comment=> comment.id === parseInt(commentId))
    comment[commentIndex].message=updatedComment.text

    return Response.json(comment[commentIndex])
}
export async function DELETE (request, {params}){
    const commentId= params.id
    const commentIndex = comment.findIndex(comment=> comment.id === parseInt(commentId))
    const commentToDelete= comment[commentIndex]
    comment.splice(commentIndex,1)

    return Response.json(commentToDelete)
}