const connection=require("../app/database")

class authServer{
    async getUserIdByName(name){
        const statement="SELECT id FROM `user` WHERE `name`=?"
        const result=connection.execute(statement,[name])  
        return result
    }
    async createMomentById(userId,moment){
       
        const statement="INSERT INTO moment(user_id,moment) VALUES(?,?)"
        const result=connection.execute(statement,[userId,moment])
        return result
    }
    async getUserIdByCommentId(commentId){   
        const statement="SELECT user_id FROM moment WHERE moment_id=?"
        const result=connection.execute(statement,[commentId])
        return result
    }
    async deleteMomentById(moment_id){
        const statement="DELETE FROM moment WHERE moment_id=?"
        const result=connection.execute(statement,[moment_id])
        return result
    }

}
module.exports=new authServer()