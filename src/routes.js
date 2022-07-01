
const bearerAuth = require('./middleware/bearerAuth')

const authController = require('./controllers/authController')
const productController = require('./controllers/productController')

const routes = (app) => {
    app.post('/login',authController.login)
    
    // Middleware for authentication bearer token, any routes under this middleware need access token to access
    app.use(bearerAuth)
    app.get('/product', productController.index )
    app.get('/product/:id', productController.show )
    app.post('/product', productController.create )
    app.put('/product/:id', productController.update )
    app.delete('/product/:id', productController.remove )
}

module.exports = routes