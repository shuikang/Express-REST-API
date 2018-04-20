/**
* @param  {Express.Request}   req  - the request object
* @param  {Express.Response}   res  - the response object
* @param  {Function} next - pass to next error handler
*/

const Text = require('../models/text')

const getAll = async (req, res) => {
    let data = await Text.getAll()
    res.json(data)
}

const get = async (req, res) => {
    let id = req.params.id
    let data = await Text.get(id)
    res.json(data)
}

const create = async (req, res) => {
    let body = req.body
    let result = await Text.create(body)
    res.json({
        id: result[0]
    })
}

module.exports = {
    getAll,
    get,
    create
}