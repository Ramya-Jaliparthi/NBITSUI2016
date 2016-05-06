(
function () {
    'use strict';
    var parentDirective = function () {
        return {
            restrict: "E,A",
            template: "<div>Hello <h1>{{parentName}}</h1><div child-dir></div> </div>",
            link: {

                pre: function (scope, element, attrs) {
                    console.log("Pre Link function of Parent");
                },
                post: function (scope, element, attrs) {
                    scope.parentName = "Kiran";
                    console.log("Post Link function of Parent");
                }
            }
        }
    };

    angular.module('nTechQuiz.components')
    .directive('parentDir', [parentDirective])

}
)();
var childDirective = function () {
    return {
        restrict: "E,A",
        template: "<h1>I am : {{childName}}</h1><h1>My Dad is :{{parentName}}</h1>",
        compile:
            function (tElement, tAttrs) {
                console.log(tElement);
                console.log("pre Compile of child");

            },


        link: {
            pre: function (scope, element, attrs) {
                console.log("Pre Link function of child");
            },
            post: function (scope, element, attrs) {
                scope.childName = "BOB";
                console.log("Post Link function of child");
            }
        }
    }
};
angular.module('nTechQuiz.components')
.directive('childDir', [childDirective])