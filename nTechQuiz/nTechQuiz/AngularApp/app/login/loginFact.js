(function () {
    'use strict';
    var loginFact = function ($http,$q) {
        return {
            loginUser: function (userData) {
                var dfd = $q.defer();
                //if (userData.UserName == "kiran" && userData.Password == "1234567890") {
                //    dfd.resolve("success");
                //}
                $http.post("api/Login",userData).then(function(response){
                    if(response.status==200){
                        dfd.resolve(response);
                    }
                    else{
                        dfd.reject(response);
                    }
                });

                return dfd.promise;
            }
        }
    };
    angular.module('nTechQuiz.login')
    .factory("loginFact",["$http","$q",loginFact])

})();