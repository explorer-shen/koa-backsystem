const jwt=require("jsonwebtoken")

const { PUBULIC_KEY } = require("../app/config")
const server = require("../server/auth.server")
const errorTypes=require("../constans/error-types")



//验证登录，获取用户
const authPermission=async(ctx,next)=>{
    
   const token=ctx.header.token
   const result=jwt.verify(token,PUBULIC_KEY,{
       algorithms:["RS256"]
   })
   const {name}=result
   ctx.user=name
   //获取到当前name的id
   let Id=await server.getUserIdByName(ctx.user)
   Id=JSON.parse(JSON.stringify(Id[0]) )
   ctx.user=Id[0].id
   await next()

}
//验证登录的用户是否有权限
const verifyPermisson=async(ctx,next)=>{
  
    const {momentId}=ctx.params
  
    
    let userId=await server.getUserIdByCommentId(momentId)
    userId=JSON.parse(JSON.stringify(userId[0]))
    userId=parseInt(userId[0].user_id)
    ctx.user=parseInt(ctx.user)
    if(userId!==ctx.user)
    {
     console.log("aaaa")
      const error=errorTypes.NOPERMISSON
      return ctx.app.emit("error",error,ctx)
    }
    await next()

}
module.exports={authPermission,verifyPermisson}

