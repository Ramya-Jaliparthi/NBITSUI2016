(function () {
    angular.module('nTechQuiz.questions')
         .service('questionSvc', ['$http', '$q',
             function ($http, $q) {
             this.getQuestions = function () {
                 var dfd = $q.defer();
                 $http.get("AngularApp/app/data/questions.json").then(function (response) {
                     if (response.status == 200) {
                         dfd.resolve(response);
                     }
                     else {
                         dfd.reject(response);
                     }
                 });
                 return dfd.promise;
             }

         }])
})();
