const jwt = require('jsonwebtoken')

const SERVER_SERCRET = 'askndfuih12n8iy1234nhifhui1234jkbnjkh123bnhjkbfg87yufg902'
const ACCESS_KEY_EXPIRE = '3600s'

module.exports = {
    sign: (obj)=>{
        return jwt.sign(obj, SERVER_SERCRET, { expiresIn: ACCESS_KEY_EXPIRE })
    },
    verify: (accessToken) =>{
        return jwt.verify(accessToken, SERVER_SERCRET)
    }
}