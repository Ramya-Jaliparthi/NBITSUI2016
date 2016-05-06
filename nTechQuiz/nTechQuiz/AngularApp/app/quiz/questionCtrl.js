(function () {
    'use strict';
    var questionCtrl = function ($scope,questionSvc, $state, $rootScope) {
        questionSvc.getQuestions().then(function (response) {
            $scope.questions = response.data.data;
        });
        $scope.handleClick = function (selectedItem) {
            _.each($scope.questions, function (item) {
                item.showAnswer = selectedItem == item;
            });
        }
    };
    angular.module('nTechQuiz.questions')
           .controller('questionCtrl',
           ["$scope","questionSvc", '$state', '$rootScope', questionCtrl])

})();