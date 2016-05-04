(function () {
    'use strict';
    var numberOnly = function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                $(element).bind('keypress', function (evt) {
                   
                    if (evt.keyCode >= 49 && evt.keyCode <= 57) {

                    }
                    else {
                        evt.preventDefault();
                    }
                    if ($(this).val().length >= attrs["maxlength"]) {
                        evt.preventDefault();
                        return;
                    }
                })
            }
        }
    };
    angular.module('nTechQuiz.components')
        .directive('numberOnly', [numberOnly]);


})();

(function () {
    'use strict';
    var maxLength = function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                $(element).bind('keypress', function (evt) {
                    if ($(this).val().length >=9) {
                        evt.preventDefault();
                    }
                })
            }
        }
    };
    angular.module('nTechQuiz.components')
        .directive('maxLength', [maxLength]);


})();