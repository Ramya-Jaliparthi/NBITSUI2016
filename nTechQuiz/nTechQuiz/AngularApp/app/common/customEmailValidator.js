(function () {
    'use strict';
    var customEmailValidator = function () {
        return {
            restrict: "A",
            require:"ngModel",
            link: function (scope, element, attrs,ctrl) {
                ctrl.$parsers.unshift(handleValidation);
               // ctrl.$formatters().unshift(handleValidation);

                function handleValidation(viewVal) {
                    var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                    var emailRegex = new RegExp(regex);

                    var result=emailRegex.test(viewVal)
                    ctrl.$setValidity("customEmailValidator", result);
                    return viewVal;
                }
            }
        }

    };
    angular.module("nTechQuiz.components")
    .directive("customEmailValidator",[customEmailValidator])
 })();