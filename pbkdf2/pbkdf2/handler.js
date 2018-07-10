"use strict"

const crypto = require('crypto')

module.exports = (event, context) => {
    const key = crypto.pbkdf2Sync(crypto.randomBytes(16), crypto.randomBytes(16), 15000, 32, 'sha512')
    const result = {
     "isBase64Encoded": false,
     "statusCode": 200,
     "headers": { },
     "body": key.toString('hex')
   }

    context
        .status(200)
        .succeed(result);
}
