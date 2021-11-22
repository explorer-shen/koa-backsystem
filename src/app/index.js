const koa=require("koa")
const bodyparser=require("koa-bodyparser")
const dynmicRouter = require("../router/dynmic.router")

const usersRouter=require("../router/user.router")
const fileRouter=require("../router/file.router")
const koaStatic=require("koa-static")
const path=require("path")
const test=require("../controller/test")
const handleErros=require("./handle-errors")
const testRouter = require("../router/test.router")

const app=new koa()

app.use(bodyparser())
app.use(testRouter.routes())
app.use(koaStatic(path.join(__dirname,"../../uploads/portrait")))

app.use(usersRouter.routes())
app.use(dynmicRouter.routes())
app.use(fileRouter.routes())
app.on("error",handleErros)


module.exports=app