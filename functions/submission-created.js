const gitpush = require('./github')

exports.handler = async event => {

    const data = JSON.parse(event.body).payload
    gitpush(data)
}
