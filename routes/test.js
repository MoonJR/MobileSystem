/**
 * Created by MoonJR on 2016. 4. 5..
 */
var www = require('../bin/www');

exports.getClient = function (req, res) {
    var result = [];
    for (var i = 0; i < www.clients.length; i++) {
        if (!www.clients[i].id) {
            continue;
        }
        result.push({
            id: www.clients[i].id,
            deviceName: www.clients[i].deviceName
        })
    }

    res.json(result);
};

exports.write = function (req, res) {

    var id = Number(req.query.id);
    var data = req.query.data;

    for (var i = 0; i < www.clients.length; i++) {
        if (www.clients[i].id == id) {
            www.clients[i].write(data + '\n');
            www.clients[i].res = res;
            return;
        }
    }

    res.send('존재하지 않는 기기 입니다.');


};

exports.getEco = function (req, res) {

    var id = Number(req.query.id);

    for (var i = 0; i < www.clients.length; i++) {
        if (www.clients[i].id == id) {
            res.json(www.clients[i].data);
            return;
        }
    }

    res.send('존재하지 않는 기기 입니다.');

};
