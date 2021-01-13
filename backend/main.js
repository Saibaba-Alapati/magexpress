const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
//app
const app = express();
//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
}).then(()=> console.log('DB Connected'));

//middlewares
app.use(cors);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})