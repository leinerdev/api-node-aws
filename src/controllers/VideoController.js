const { getAllVideos } = require('../services/VideoService')

const getList = (req, res) => {
    res.send({
        data: getAllVideos()
    })
}

const getDetails = (req, res) => {
    res.send({
        data: 'Detalles'
    })
}

const updateItem = (req, res) => {
    res.send({
        data: 'Actualizar'
    })
}

const createItem = (req, res) => {
    res.send({
        data: 'Crear'
    })
}

const deleteItem = (req, res) => {
    res.send({
        data: 'Eliminar'
    })
}

module.exports = {
    getList, getDetails, updateItem, createItem, deleteItem,
}