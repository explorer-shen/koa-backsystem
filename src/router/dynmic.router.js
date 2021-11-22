const Router=require("koa-router")

const {create,deletedy}=require("../controller/auth.controller")
const { authPermission, verifyPermisson } = require("../middleware/authPermisson")
const dynmicRouter=new Router()


//发表动态
dynmicRouter.post('/dynmic',authPermission,create)
//删除动态
dynmicRouter.delete('/dynmic/:momentId',authPermission,verifyPermisson,deletedy)


module.exports=dynmicRouter

