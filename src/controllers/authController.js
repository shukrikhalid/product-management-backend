const jwtHelper = require('../helpers/jwtHelper')
const moment = require('moment-timezone')
moment.tz('Asia/Kuala_Lumpur')

const USERNAME = 'admin'
const PASSWORD = '123456'


const productController = {
    login: (req, res) => {
        if(req.body.username === USERNAME && req.body.password === PASSWORD){
            //Note: this should store & query from DB. password must store in hash
            const params = {
                username: req.body.username,
                timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
            }
            const accessToken = jwtHelper.sign(params)
            return res.json({ status:true, message:"Login Success", accessToken })
        }
        else{
            return res.status(400).json({ status:false, message:`Invalid username or password`})
        }
    }

}

module.exports = productController