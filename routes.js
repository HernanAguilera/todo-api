'use strict'

const express = require('express')
const tasksController = require('./controllers/tasks')
const api = express.Router()

api.get('/tasks', tasksController.list)
api.post('/tasks', tasksController.create)
api.get('/tasks/:id', tasksController.get)
api.put('/tasks/:id', tasksController.update)
api.delete('/tasks/:id', tasksController.remove)

module.exports = api