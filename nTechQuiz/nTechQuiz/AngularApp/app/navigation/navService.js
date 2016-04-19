(function () {
    'use strict';
    angular.module('nTechQuiz.nav')
     .service("navService", ["$http","$q",function ($http,$q) {
         var navItems;
         this.navItems = [
             {
             Name: "Home",
             TemplateUrl: "home/home.tpl.html",
             CssClass:""
             },
             {
                 Name: "Contact",
                 TemplateUrl: "contact/contact.tpl.html",
                 CssClass: ""
             },
         ]
         this.navItemsFromApi = function () {
             return $http.get('api/nav');
         };
         this.navItemsFromApiWithPromise = function () {
             var dfd = $q.defer();
             if (navItems) {
                 dfd.resolve(navItems);
             }
             else {
                 $http.get('api/nav').success(function (response) {
                     response.message = "Success";
                     navItems = response;
                     //mock Data
                     dfd.resolve(navItems);

                 }).error(function (response) {
                     response.message = "Failure";
                     dfd.reject(response);
                 })
             }
             return dfd.promise;
         }
     }]);
})();