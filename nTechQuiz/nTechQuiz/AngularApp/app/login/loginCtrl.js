(function () {
    'use strict';
    var loginCtrl = function (loginFact) {
        var vm = this;
        vm.login = {
            UserName: "kiran",
            Password: "1234567890"
        };

        vm.loginUser = function () {
            loginFact.loginUser(vm.login)
                .then(function (response) {
                    //logic to handle the authentication
                    console.log(response);
                })
                .catch(function (response) {
                });
        }

    };
    angular.module('nTechQuiz.login')
           .controller('loginCtrl',
           ["loginFact",loginCtrl])

})();