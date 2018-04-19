const knex = require('../../config/knex')

const getAll = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await knex('texts')
            resolve(data)
        }
        catch (error) {
            reject(error)
        }
    })
}

const get = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await knex('texts').where('id', id)
            resolve(data)
        }
        catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAll,
    get
}