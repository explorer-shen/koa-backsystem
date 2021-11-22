const Router=require("koa-router")
const verifyCreate=require("../middleware/verifyCreate")
const verifyLogin=require("../middleware/verifyLogin")
const {create,login}=require("../controller/user.controller")

const usersRouter=new Router()

usersRouter.post("/create",verifyCreate,create)
usersRouter.get("/login",verifyLogin,login)





module.exports=usersRouter