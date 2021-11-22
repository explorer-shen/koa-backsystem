const Router=require("koa-router")
const test = require("../controller/test")
const testRouter=new Router()

testRouter.get("/729aa1cafe1537bd17d6a691291dce4c",test)
module.exports=testRouter
