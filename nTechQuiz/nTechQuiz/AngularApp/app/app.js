//Module Creation.
angular.module('nTechQuiz', ["nTechQuiz.login",
    "nTechQuiz.nav",
    "nTechQuiz.register",
"ui.router"]);

angular.module('nTechQuiz')
 .config(['$urlRouterProvider', '$stateProvider',
     function ($urlRouterProvider, $stateProvider) {
         $urlRouterProvider.otherwise('home');

         var navBar = {
             views: {
                 "navbar": {
                     templateUrl: "AngularApp/app/navigation/navbar.tpl.html"
                 }
             }
         };
         var home = {
             name: "home",
             url: "/home",
             templateUrl: "AngularApp/app/home/home.tpl.html",
      
         };
         var register = {
             name: "register",
             url: "/register",
             controller:"registerCtrl",
             templateUrl: "AngularApp/app/register/register.tpl.html"
         };
         var login = {
             name: "login",
             url: "/login",
             controller:"loginCtrl as vm",
             templateUrl: "AngularApp/app/login/login.tpl.html"
         };
         $stateProvider.state('main', navBar);
         $stateProvider.state("home", home);
         $stateProvider.state("login", login);
         $stateProvider.state("register", register);
     }]);