// making caching dynamic

export const dynamic  = 'force-dynamic'

export async function GET (){
    return new Response(new Date().toLocaleTimeString())
}