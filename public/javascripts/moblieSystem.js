/**
 * Created by MoonJR on 2016. 4. 19..
 */
var app = angular.module('MobileSystem', []);
app.controller('connectCtrl', function ($scope, $http, $timeout) {

    $scope.env = {
        temp: "Loading...",
        hum: "Loading...",
    };

    $scope.door = [
        {isOpen: true, time: 1461119458000},
        {isOpen: false, time: 1461119558000},
        {isOpen: true, time: 1461119658000},
        {isOpen: false, time: 1461119758000},
        {isOpen: true, time: 1461119858000},
        {isOpen: false, time: 1461119758000},
        {isOpen: true, time: 1461119858000},
        {isOpen: false, time: 1461119758000},
        {isOpen: true, time: 1461119858000},
        {isOpen: false, time: 1461119758000},
        {isOpen: true, time: 1461119858000}];

    $scope.switch = [{status: '열림'}, {status: '열림'}, {status: '열림'}, {status: '열림'}];

    $scope.getDoorStatusStr = function (isOpen) {
        if (isOpen) {
            return '열림';
        } else {
            return '닫힘';
        }
    };

    $scope.changeSwitch = function (index) {
        $scope.switch[index].status = "<i class='fa fa-spinner fa-spin'></i> Processing Order";
    };

    $scope.refresh = function () {
        $timeout(function () {
            $scope.getEco();
            $scope.refresh();
        }, 3000);
    };

    $scope.getEco = function () {
        $http.get('/getEco?id=101').success(function (response) {
            if (response.flag == 2) {
                $scope.env.temp = response.temp;
                $scope.env.hum = response.hum;
            }
        }).error(function () {
            console.log("error");
        });
    };

});
