const mysql=require("mysql2")

const envArray=require("./config")

const connection=mysql.createPool({
host:envArray.DATA_HOST,
port:envArray.DATA_PORT,
database:envArray.DATA_BASE,
user:envArray.DATA_USER,
password:envArray.DATA_PASSWORD
})

connection.getConnection((err,conn)=>{
    conn.connect((err=>{
        if(err)
        {
            console.log("连接失败"+err)
        }
        else{
            console.log("连接成功")
        }

    }))
})
module.exports=connection.promise()




