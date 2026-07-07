require('dotenv').config()
const jwt = require('jsonwebtoken')

const authJWT = (req, res, next) => {
    const authHeader = req.header('Authorization')
    //console.log(authHeader)

    if(!authHeader){
        res.setHeader('WWW-Authenticate', 'bearer')

        return res.status(401).json({
            status : "ditolak",
            message : "anda belum login"
        })
    }

    //console.log(authHeader)
    const token = authHeader.split(" ")[1]
    //console.log(token)
    if(!token){
         return res.status(401).json({
            status : "ditolak",
            message : "Format token yang diinput salah 'Bearer <token>'"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
             return res.status(401).json({
             status : "ditolak",
             message : "invalid token"
        })
        }else{
        req.user = user
        console.log(user)
        
        
        next()

        }
    })
}

module.exports = {authJWT}