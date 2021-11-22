const server=require("../server/user.server")
const md5password=require("../utils/passwordHandle")
const jwt=require("jsonwebtoken")
const { PRIVATE_KEY}=require("../app/config")

class userController{
    async create(ctx,next){
       
        let [{name,password}]=ctx.request.body
        password=md5password(password)
        const result=await server.createuser(name,password)
        console.log(result)
        ctx.body="创建成功"
        await next()

    }
    async login(ctx,next){
        ctx.body="登录成功"
        const {name,password}=ctx.user
        const token=jwt.sign({name,password},PRIVATE_KEY,{
            expiresIn:60*60*24,
            algorithm:"RS256"

        })
        ctx.body={name,password,token}

        await next()
    }
}
module.exports=new userController