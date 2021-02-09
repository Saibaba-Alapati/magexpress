const  Client = require('pg').Client
const dbConfig = require('./config/db.config')
const client = new Client({
    user: dbConfig.USER,
    host: dbConfig.HOST,
    database: dbConfig.DB,
    password: dbConfig.PASSWORD,
    port: 5432,
})

module.exports = client;