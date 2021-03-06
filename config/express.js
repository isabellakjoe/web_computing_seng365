const express = require('express')
const bodyParser = require('body-parser')

module.exports = function() {
    const app = express();


    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({
        extended: false
    }))
    
    require('../app/routes/user.server.routes')(app)
    require('../app/routes/project.server.routes')(app)

    return app;
}


