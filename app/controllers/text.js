/**
* @param  {Express.Request}   req  - the request object
* @param  {Ecpress.Response}   res  - the response object
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

module.exports = {
    getAll,
    get
}