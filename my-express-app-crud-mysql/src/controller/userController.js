const connectionPool = require("../config/db")
const bcrypt = require('bcrypt')
const login = (req, res) => {
    res.send("halo halo ini halaman login")
}

const register = (req, res) => {
    let {email, name, pass} = req.body
    let queryText = `SELECT * FROM tb_user WHERE email_tb_user = '${email}'`

    connectionPool.query(queryText, (err, result) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                status : "Failed",
                Message : err.message
            })
        }
        
    if(result.length > 0){
            return res.status(500).json({
                status : "Failed",
                Message : "email user sudah terbaca"
            })
    }

        bcrypt.hash(pass, 10, (err, hashedPassword) => {
            if(err){
                console.error(err)
                return res.status(500).json({
                    status : "Failed",
                    Message : err.message
                })
            }

            let insertQuery = `INSERT INTO tb_user(email_tb_user, name_tb_user, pass_tb_user)
                               VALUES ("${email}", "${name}", "${hashedPassword}")`

            connectionPool.query(insertQuery, (err, result) => {
                      if(err){
                     console.error(err)
                     return res.status(500).json({
                     status : "Failed",
                     Message : err.message
                
                })
            }
            res.status(200)
            res.json({message : "user berhasil dibuat",
                status: "sucsess",
                result: result
            })


        })
        })
    })
}

module.exports = {login, register}