(function () {
    'use strict';
    var customDatePicker = function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                //attribute based date range
                //$(element).datepicker({minDate:attrs['mindate'],maxDate:attrs['max']});
                //scope based date range
                $(element).datepicker(scope.config);
            }
        }
    };
    angular.module('nTechQuiz.components')
        .directive('customDatePicker', [customDatePicker]);


})();