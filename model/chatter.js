const Path = require('path')
const Dynamo = require('dynamodb')
const Joi = require('joi')
const Moment = require('Moment')
Dynamo.AWS.config.loadFromPath(Path.join(global.Root, 'config', 'aws.json'))

const Chatter = Dynamo.define('chatter', {
    hashKey: 'chatId',
    rangeKey: 'userName',
    timestamps: true,
    schema: {
        chatId: Joi.string().uuid(),
        userName: Joi.string(),
        joined: Joi.date(),
        left: Joi.date(),
    },
    tableName: 'koreroMai_chatter'
});

const addUserToChat = async({ userName, private }) => {
    Chatter.create({ userName, chatId, joined: Moment() }, function (err, chatter) {
        console.log('created chatter in DynamoDB', chat.get('userName'))
    })
}

const removeUserFromChat = async({ userName, chatId }) => {
    Chatter.update({ userName, chatId, left: Moment() }, function (err, chatter) {
        console.log('created chatter in DynamoDB', chat.get('userName'))
    })
}

const listChatsForUser = async({ userId }) => {
    //update user to confirmed
}

module.exports = { listChatsForUser, addUserToChat, removeUserFromChat, Chatter }