(function () {
    'use strict';
    angular.module('nTechQuiz.login')
           .controller('loginCtrl',
           ["$scope",
    function ($scope) {
        $scope.login = {
            username: "kiran"
        };
    }])
    .controller("loginCtrl2", ['$scope', function ($scope) {
        //$scope.login={
        //    username: "PVS"};
    }]);
})();