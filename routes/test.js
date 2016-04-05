/**
 * Created by MoonJR on 2016. 4. 5..
 */
var clients = require('../bin/www');

exports.getClient = function (req, res) {
    res.json(clients.clients);
}