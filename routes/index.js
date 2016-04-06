var express = require('express');
var test = require('./test');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/get', test.getClient);
router.get('/write', test.write);
module.exports = router;
