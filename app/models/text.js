const knex = require('../lib/knex')

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
            let data = await knex('texts')
                .where('id', id)
            resolve(data)
        }
        catch (error) {
            reject(error)
        }
    })
}

const create = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await knex('texts')
                .insert(data)
            resolve(result)
        }
        catch (error) {
            reject(error)
        }
    })
}

const update = async (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await knex('texts')
                .where('id', id)
                .update(data)
            resolve(result)
        }
        catch (error) {
            reject(error)    
        }
    })
}

const del = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await knex('texts')
                .where('id', id)
                .del()
            resolve(result)
        }
        catch (error) {
            reject(error)    
        }
    })
}

module.exports = {
    getAll,
    get,
    create,
    update,
    del
}