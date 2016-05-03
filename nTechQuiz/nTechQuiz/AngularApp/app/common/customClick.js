(function () {
    'use strict';
    function customClick() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                console.log(scope);
                console.log(element);
                console.log(attrs);
                console.log(attrs['customClick']);
                $(element).bind('click', function () {
                    //console.log("hello guys");
                    //scope.changedClass = "btn btn-danger";
                    //scope.$apply();
                    scope.$eval(attrs['customClick']);
                    scope.$apply();
                });
            }
        }
    }
    angular.module('nTechQuiz.components')
    .directive('customClick',[customClick])

})();

(function () {
    'use strict';
    function customClickX() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                
                element.bind('click', function () {
                    scope.$eval(attrs['customClickX']);
                });
            }
        }
    }
    angular.module('nTechQuiz.components')
    .directive('customClickX', [customClickX])

})();