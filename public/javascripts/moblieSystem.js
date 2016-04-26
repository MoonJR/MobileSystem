/**
 * Created by MoonJR on 2016. 4. 19..
 */
var app = angular.module('MobileSystem', []);
app.controller('connectCtrl', function ($scope, $http) {

    $scope.env = {
        temp: 10,
        hum: 50,
        width: 50,
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
    //<i class='fa fa-spinner fa-spin'></i> Processing Order

    // $scope.sendLogin = function () {
    //     if ($scope.login.email == '') {
    //         toastr.warning('이메일을 입력해 주세요.', 'Warning');
    //         return;
    //     } else if ($scope.login.passwd == '') {
    //         toastr.warning('비밀번호를 입력해 주세요.', 'Warning');
    //         return;
    //     }
    //     $scope.login.isLoading = true;
    //
    //     $http.post('/login', $scope.login).success(function (response) {
    //         if (response.success_code == 2000) {
    //             $scope.successLogin(true);
    //         } else if (response.success_code = 3000) {
    //             toastr.error('로그인 실패\n정보를 확인해 주세요.', 'Error');
    //         } else {
    //             toastr.error('서버 오류.', 'Error');
    //         }
    //         $scope.login.isLoading = false;
    //     }).error(function () {
    //         toastr.error('서버 오류.', 'Error');
    //         $scope.login.isLoading = false;
    //     });
    // };

});
