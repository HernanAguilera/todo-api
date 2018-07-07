'use strict'

const connect = require('./db')
const app = require('./app')
const config = require('./config')


connect(() => {
    app.listen(config.port, () => {
        console.log(`listen port ${config.port}`)
    })
})