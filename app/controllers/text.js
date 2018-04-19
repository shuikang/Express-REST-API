/**
* @param  {Express.Request}   req  - the request object
* @param  {Ecpress.Response}   res  - the response object
* @param  {Function} next - pass to next error handler
*/

const getAll = async (req, res) => {
    res.json({
        text: "Hello World!!"
    })
}

module.exports = {
    getAll
}