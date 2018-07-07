'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = Schema({
    name: {type: String, maxlength: 256, required: true},
    done: {type: Boolean, default: false},
})

module.exports = mongoose.model('Tasks', TaskSchema)