"use strict"

module.exports = (event, context) => {
    const result = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": { },
        "body": (new Date).toString()
      };

    context
        .status(200)
        .succeed(result);
}
