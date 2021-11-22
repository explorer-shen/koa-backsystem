const server = require("../server/user.server")
const errorTypes = require("../constans/error-types")

const verifyCreate = async (ctx, next) => {
   console.log(ctx.headers)
   const [{ name, password }] = ctx.request.body;
   //1.判断账号或者密码是否为空
   if (!name || !password) {
      const error = errorTypes.NAME_PASSWORDNOTNULL;
      return ctx.app.emit("error", error, ctx)
   }
   //2.判断账号是否已经存在
   const result = await server.createVerify(name)
   if (result[0].length) {
      const error = errorTypes.NAMEISEXIST;
      return ctx.app.emit("error", error, ctx)

   }


   //3.把账号密码插入到数据库
   console.log("verifyend")
   await next()





}

module.exports = verifyCreate