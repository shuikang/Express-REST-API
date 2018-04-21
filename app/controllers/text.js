/**
* @param  {Express.Request}   req  - the request object
* @param  {Express.Response}   res  - the response object
* @param  {Function} next - pass to next error handler
*/

const Text = require('../models/text')

const getAll = async (req, res) => {
    let data = await Text.getAll()
    return res.json(data)
}

const get = async (req, res) => {
    let id = req.params.id
    let data = await Text.get(id)
    if(data.length == 0) {
        return res.status(400)
            .json({
                error: 'MissingRow',
                message: 'ID does not exist '
            })
    }
    return res.json(data)
}

const create = async (req, res) => {
    let body = req.body
    let result = await Text.create(body)
    return res.json({
        id: result[0]
    })
}

const update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let result = await Text.update(id, body)
    if (result == 0) {
        return res.status(400)
            .json({
                error: 'MissingRow',
                message: 'ID does not exist '
            })
    }
    return res.json({
        update: result
    })
}

const del = async (req, res) => {
    let id = req.params.id
    let result = await Text.del(id)
    if (result == 0) {
        return res.status(400)
            .json({
                error: 'MissingRow',
                message: 'ID does not exist '
            })
    }
    return res.json({
        delete: result
    })
}

module.exports = {
    getAll,
    get,
    create,
    update,
    del
}