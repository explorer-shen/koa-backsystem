const Router=require("koa-router")
const { authPermission,verifyPermisson } = require("../middleware/authPermisson")
const {upload}=require("../controller/file.controller")
const portraitHandle=require("../middleware/portraitHandle")




const fileRouter=new Router()

fileRouter.post("/portrait",authPermission,portraitHandle,upload)

module.exports=fileRouter