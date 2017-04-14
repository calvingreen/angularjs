var UserInfoModule = angular.module('UserInfoModule', []);
UserInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
    $scope.userInfo = {
        email: "cg87429@sina.com",
        password: "123123",
        autoLogin: true
    };
    $scope.getFormData = function(){
        console.log($scope.userInfo);
    };
    $scope.setFormData = function(){
        $scope.userInfo = {
            email: "123@sina.com",
            password: "1234567",
            autoLogin: false
        }
    };
    $scope.resetFormData = function(){
        $scope.userInfo = {};
    };
}])