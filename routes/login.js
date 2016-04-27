/**
 * Created by MoonJR on 2016. 4. 27..
 */

var flag = require('../manager/flag');

exports.login = function (req, res, next) {

    console.log(req.session.id);
    if (req.body.id != 'root' || req.body.passwd != 'whdfkr77') {
        res.render('login', {});
        return;
    }

    req.session.user = 'root';
    res.redirect('back');
};

exports.checkSession = function (req, res, next) {
    if (req.session.user != 'root') {
        res.render('login', {});
        return;
    } else {
        next();
    }

};