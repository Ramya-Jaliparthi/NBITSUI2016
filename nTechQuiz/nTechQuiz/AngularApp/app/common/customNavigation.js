(function () {
    'use strict';
    var customLogin= function () {
        return {
            //template: "<h1>I am the navigation bar",
            restrict: "E,A,C",
            templateUrl:"AngularApp/app/login/login.tpl.html"
        }
    };
angular.module('nTechQuiz.components')
       .directive('customLogin', [customLogin]);
})();