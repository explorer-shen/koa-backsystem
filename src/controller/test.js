const test=async (ctx,next)=>{
    console.log("aa")
    ctx.set('Content-Type','image/jpeg')
    await next()
}
module.exports=test