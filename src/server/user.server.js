const connection=require("../app/database")
const usersRouter = require("../router/user.router")

class userServer{
    //验证账号是否已经被注册
    async createVerify(name)
    {
        const statement="SELECT *FROM user WHERE `name`=?"
        const result=connection.execute(statement,[name])
        return result
    }
    //创建用户
    async createuser(name,password)
    {
        const statement="INSERT INTO user(`name`,`password`) VALUES(?,?)";
        const result=connection.execute(statement,[name,password]);
        return result

    }
    //验证登录
    async serverLogin(name,password)
    {
        const statement="SELECT * FROM `user` where `name`=? AND `password`=?";
        const result=connection.execute(statement,[name,password])
        return result
    }

}

module.exports=new userServer()