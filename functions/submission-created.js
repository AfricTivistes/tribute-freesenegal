const gitpush = require('./github')

exports.handler = async (event, context, callback) => {

    const data = JSON.parse(event.body).payload
    gitpush(data).then(
        result => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({message: result})
    })})
}
