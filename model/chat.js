const Path = require('path')
const Dynamo = require('dynamodb')
const Joi = require('joi')
Dynamo.AWS.config.loadFromPath(Path.join(global.Root, 'config', 'aws.json'))

const Chat = Dynamo.define('chat', {
    hashKey: 'chatId',
    rangeKey: 'userName',
    timestamps: true,
    schema: {
        chatId: Dynamo.types.uuid(),
        userName: Joi.string(),
        maxChatters: Joi.number().integer(),
        open: Joi.boolean(),
    },
    tableName: 'koreroMai_chat'
});

const createChat = async({ userName, chatter, maxChatters }) => {
    Chat.create({ userName, maxChatters }, function (err, chat) {
        console.log('created new chat in DynamoDB', chat.get('chatId'))
        //then add userName + chatId to chatter
        //then add chatter (also a user name) + chatId to chatter
    })
}

const listChatsForUser = async({ userName }) => {
    Chat.getItems({userName, open: true}, function (err, chats) {

    });//update user to confirmed
}

module.exports = { listChatsForUser, createChat, Chat }