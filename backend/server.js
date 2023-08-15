const express = require ('express')
const cors =require('cors')
const mongoose = require ('mongoose')
const connectDB = require('./config/database')

const errorMiddleware = require('./middleware/errorMiddleware')
require('dotenv').config({path: './config/.env'})

const app = express()


app.use(cors())

const PORT =  process.env.PORT || 6000;
connectDB()

/*middleware*/
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 


/*routes basic*/


app.get('/', (req, res) => {
    res.send('hello world ')

 })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
 
 app.get('/blog', (req, res) => {
  res.send('Hello Blog, My name is pat')
})


// HTTP request logger

app.use('/api', routes);


app.use(errorMiddleware);


 /*port*/
app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}!`);
  });