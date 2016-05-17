var express = require('express');
var test = require('./test');
var login = require('./login');
var router = express.Router();


/* GET home page. */
router.get('/', login.checkSession, function (req, res) {
    res.render('index', {title: 'Express'});
});

router.post('/login', login.login, function (req, res) {
    res.render('index', {title: 'Express'});
});

router.get('/get', test.getClient);
router.get('/write', test.write);
router.get('/getEco',test.getEco);
module.exports = router;
