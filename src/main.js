 const app=require("./app/index")
 const envArray=require("./app/config")

app.listen(envArray.APP_PROT,()=>{
    console.log("服务已启动")
})