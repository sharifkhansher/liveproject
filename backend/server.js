const express=require('express');
const { route } = require('./routes/userRoutes');
const {product} = require('./routes/productRoutes')
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({extended:false}))
const errorHandler = require('./middleware/errorMiddleware')
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/product', require('./routes/productRoutes'))
app.use('/api/userauth', require('./routes/useraurtRoutes'))


const ConnectDB = require('./config/db')
console.log("hello my dear friend");
ConnectDB()
app.listen(port,()=>{
    console.log(`port is colled${port}`);
})
console.log(process.env.MONGO_URL);