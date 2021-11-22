const errorTypes=require("../constans/error-types")

const handleErros=(error,ctx)=>{
    let massage,status;
    switch(error){
    case errorTypes.NAME_PASSWORDNOTNULL:
        massage="账号或密码不能为空";
        status=400;
        break;

    case errorTypes.NAMEISEXIST:
        massage="用户名已存在";
        status=409;
        break;

    case errorTypes.NAME_PASSWORDISNOTRIGHT:
        massage="账号或密码错误";
        status=400;
    case errorTypes.NOPERMISSON:
        massage="没有对应的权限";
        status=401
        default:status=200;
    }  
    
    ctx.body=massage;
    ctx.status=status;

}
module.exports=handleErros