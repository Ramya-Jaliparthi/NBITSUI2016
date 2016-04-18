(function () {
    'use strict';
    angular.module('nTechQuiz.nav')
     .service("navService", ["$http",function ($http) {
         this.navItems = [
             {
             name: "Home",
             templateUrl: "home/home.tpl.html",
             cssClass:""
             },
             {
                 name: "Contact",
                 templateUrl: "contact/contact.tpl.html",
                 cssClass: ""
             },
         ]
         this.navItemsFromApi = function () {
             return $http.get('api/nav');
         }
     }]);
})();