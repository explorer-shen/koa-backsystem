

class fileController{
    async upload(ctx,next){
        console.log("处理图片信息")
        console.log(ctx.req.file)
        await next()
    }
}
module.exports=new fileController()