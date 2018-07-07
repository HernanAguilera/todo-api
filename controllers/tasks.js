'use strict'

const Task = require('../models/Task')

function list(req, res) {
    Task.find({}, (error, tasks) => {
        if(error) res.status(500).send(`Ha ocurrido un error al obtener los elementos: ${error}`)
        res.send(tasks)
    })
}

function create(req, res) {

    var task = new Task({
        name: req.body.name
    })

    task.save((error, taskSaved) => {
        if(error) return res.status(500).send(`Ha ocurrido un error al intentar guardar el elemento: ${error}`)

        res.send(taskSaved)
    })
}

function get(req, res) {
    var id = req.params.id

    Task.findById(id, (error, task) => {
        if(error) return res.status(500).send(`Ha ocurrido un error al intentar obtener el elemento: ${error}`)

        if(!task) return res.status(404).send('La tarea solicitada no ha pidido ser encontrada')

        res.send(task)
    })
}

function update(req, res) {
    var id = req.params.id
    var data = req.body
    console.log(data)
    Task.findByIdAndUpdate(id, data, (error, task) => {
        if(error) return res.status(500).send('Ha ocurrido un error')
        
        res.send(Object.assign(task, data))
    })
}

function remove(req, res) {
    var id = req.params.id

    Task.findById(id, (error, task) => {
        if(error) return res.status(500).send({message: `se ha producido un error al buscar el elmento solicitado: ${error}`})

        if(!task) return res.status(404).send('La tarea solicitada no ha pidido ser encontrada')

        task.remove(error => {
            if(error) return res.status(500).send({message: `se ha producido un error al intentar eliminar el elemento: ${error}`})

            res.send('La tarea ha sido eliminada.')
        })
    })
}

module.exports = {
    list,
    create,
    get,
    update,
    remove
}