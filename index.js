const express = require('express');
const cors = require('cors')

const app = express();
const routes = require('./src/routes')
require('./src/mongoClient')


app.use(express.json());
app.use(cors())

routes(app)

app.listen(8000, () => {
    console.log(`Server is running on PORT 8000`);
});