// app.js

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');    // will let us pull POST content from our HTTP request

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// Test route accessed at GET http://localhost:9090/traffic-api)
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the traffic api!' });
});

router.route('/road/:road_id')
    // get the traffic info of the road with id road_id
    // (accessed at GET http://localhost:8080/traffic-api/road/:road_id)
    .get(function(req, res) {
        if(req.params.road_id % 2 === 0)
            res.json({road_id: req.params.road_id, status: "FREE"})
        else
            res.json({road_id: req.params.road_id, status: "JAM"})
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /traffic-api
app.use('/traffic-api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Traffic info available on port: ' + port);
