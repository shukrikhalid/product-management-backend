const jwtHelper = require('../helpers/jwtHelper')
module.exports = (req, res, next) => {
    try {
        const authorization = req.headers['authorization']
        const accessToken = authorization?.split(" ")[1]
        const verify = jwtHelper.verify(accessToken)
        if(verify){
            next()
        }
        else{
            return res.status(403).json({ status:false, message:`Invalid access token`})
        }
    } catch (error) {
        return res.status(403).json({ status:false, message:`Invalid access token`, error: error.message})
    }
}