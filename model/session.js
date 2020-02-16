const Path = require('path')
const Joi = require('joi')
const Dynamo = require('dynamodb')
Dynamo.AWS.config.loadFromPath(Path.join(global.Root, 'config', 'aws.json'))

const Session = Dynamo.define('session', {
    hashKey: 'id',
    schema: {
        id: Dynamo.types.uuid(),
    },
    tableName: 'koreroMai_session'
})

module.exports = { Session }
