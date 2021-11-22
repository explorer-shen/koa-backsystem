const server = require("../server/auth.server")


class authController {
    async create(ctx, next) {

        let [{ moment }] = ctx.request.body
        console.log(moment)
        const result = await server.createMomentById(ctx.user, moment)
        ctx.body = result

        await next()

    }
    async deletedy(ctx,next){
        const {momentId}=ctx.params
        const result=await server.deleteMomentById(momentId)
       
        ctx.body=result
        console.log("删除成功")
        await next()
    }

}
module.exports = new authController()