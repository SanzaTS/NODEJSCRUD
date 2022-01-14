const express =require('express')
const mongoose =require('mongoose')
//const { MongoClient } = require('mongodb');
const cors = require('cors');

const url = 'mongodb+srv://dbuser:4pp9$eRUYTX!UM_@sanelecluster.gpkrc.mongodb.net/ecormerce?retryWrites=true&w=majority'
//const url = 'mongodb+srv://salesuser:LUTAIc0x1bHzDUBG@sanelecluster.gpkrc.mongodb.net/aliens?retryWrites=true&w=majority'

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const conn = mongoose.connection

conn.on('open', () => {
    console.log('successfull connecteed ***')
})

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json())

const alienRouter = require('./routes/aliens')
const productRouter = require('./routes/ProducRoute')
const categoryRouter = require('./routes/CategoryRoute')
const userRouter = require('./routes/UserRoute')
const cartRouter = require('./routes/CartRoute')
const orderRouter = require('./routes/OrderRoute')

app.use('/aliens', alienRouter)
app.use('/products',productRouter)
app.use('/category',categoryRouter)
app.use('/user', userRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)

const PORT = process.env.PORT || 9000;

//app.listen(PORT);

app.listen(PORT, () =>{
    console.log("Server started")
})