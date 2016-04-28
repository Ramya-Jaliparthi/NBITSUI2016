(function () {
    'use strict';
    var loginCtrl = function (loginFact, authenticateSvc, $state, $rootScope) {
        var vm = this;
        vm.login = {
            UserName: "",
            Password: ""
        };

        vm.loginUser = function () {
            loginFact.loginUser(vm.login)
                .then(function (response) {
                    //logic to handle the authentication
                    console.log(response);
                    if (response.statusText=="OK" && response.status==200) {
                        var userDetails = response.data;
                        userDetails.isAuthenticated = true;
                        authenticateSvc.authenticate(userDetails);
                        $rootScope.$broadcast("AUTHENTICATION_SUCCESS", { data: userDetails });
                        $state.go('home');
                    }
                })
                .catch(function (response) {
                });
        }

    };
    angular.module('nTechQuiz.login')
           .controller('loginCtrl',
           ["loginFact","authenticateSvc",'$state','$rootScope',loginCtrl])

})();