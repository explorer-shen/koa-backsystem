const dotenv=require("dotenv")
const path=require("path")
const fs=require("fs")

dotenv.config({path:path.resolve(__dirname,"../../.env")})
const PRIVATE_KEY=fs.readFileSync(path.resolve(__dirname,"../keys/private.key"))
const PUBULIC_KEY=fs.readFileSync(path.resolve(__dirname,"../keys/public.key"))

const envarray={
    APP_PROT,
    DATA_HOST,
    DATA_PORT,
    DATA_BASE,
    DATA_USER,
    DATA_PASSWORD
} =process.env;


module.exports=envarray
module.exports.PRIVATE_KEY=PRIVATE_KEY
module.exports.PUBULIC_KEY=PUBULIC_KEY


