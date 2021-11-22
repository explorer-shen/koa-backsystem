const Multer=require("koa-multer")
const PORTRAIT=require("../constans/file-path")

const portraitUpload=Multer({
    dest:PORTRAIT
})

const portrait=portraitUpload.single("portrait")

module.exports=portrait