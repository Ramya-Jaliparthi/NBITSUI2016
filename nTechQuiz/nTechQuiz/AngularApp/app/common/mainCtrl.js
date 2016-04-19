(function () {    angular.module('nTechQuiz')
           .controller('mainCtrl', ["$scope", "navService",
               function ($scope,navService) {
                   var baseUrl = "AngularApp/app/";
                   //$scope.loadView = function (type) {
                   //    if (type == 'login') {
                   //        $scope.contentTemplate = baseUrl + 'login/login.tpl.html';
                   //    }
                   //}
                   $scope.loadView = function (data) {
                       $scope.contentTemplate = baseUrl + data.TemplateUrl;
                       angular.forEach($scope.navItems, function (item) {
                           //console.log(item);
                           if (item.name == data.name)
                               item.cssClass = "active";
                           else
                               item.cssClass = "";
                       });

                   }
                   $scope.navigationUrl = baseUrl + "navigation/navbar.tpl.html";
                   ///$scope.navItems = navService.navItems;
                   //navService.navItemsFromApi().success(function (response) {
                   //    $scope.navItems = response;
                   //    //set the default tab
                   //    $scope.loadView(response[0]);
                   //}).error(function (errorResponse) {

                   //});

                   //get navigation items from promise

                   navService.navItemsFromApiWithPromise().then(function(response){

                       $scope.navItems = response;
                   }).catch(function (response) {
                       console.log("error");
                   })

               }]);
})();