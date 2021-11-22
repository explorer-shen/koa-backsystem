const errorTypes = require("../constans/error-types")
const server=require("../server/user.server")
const md5password=require("../utils/passwordHandle")


const verifyLogin=async (ctx,next)=>{
    const [user]=ctx.request.body
    ctx.user=user
    if(!ctx.user.name||!ctx.user.password)
    {
        const error=errorTypes.NAME_PASSWORDNOTNULL
        return  ctx.app.emit('error',error,ctx)
    }
  //  user.password=md5password(user.password)
    const result=await server.serverLogin(user.name,user.password)
   
   
    if(result[0].length<1)
    {
        const error=errorTypes.NAME_PASSWORDISNOTRIGHT
        return ctx.app.emit("error",error,ctx)
        
    }

    
    await next()
}

module.exports=verifyLogin