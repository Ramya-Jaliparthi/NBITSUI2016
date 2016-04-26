﻿angular.module('nTechQuiz').factory(
           "getWatchCount",
           function () {
               // I return the count of watchers on the current page.
               function getWatchCount() {
                   var total = 0;
                   // AngularJS denotes new scopes in the HTML markup by appending the
                   // class "ng-scope" to appropriate elements. As such, rather than
                   // attempting to navigate the hierarchical Scope tree, we can simply
                   // query the DOM for the individual scopes. Then, we can pluck the
                   // watcher-count from each scope.
                   // --
                   // NOTE: Ordinarily, it would be a HUGE SIN for an AngularJS service
                   // to access the DOM (Document Object Model). But, in this case,
                   // we're not really building a true AngularJS service, so we can
                   // break the rules a bit.
                   angular.element(".ng-scope").each(
                       function ngScopeIterator() {
                           // Get the scope associated with this element node.
                           var scope = $(this).scope();
                           // The $$watchers value starts out as NULL.
                           total += scope.$$watchers
                               ? scope.$$watchers.length
                               : 0
                           ;
                       }
                   );
                   return (total);
               }
               // For convenience, let's serialize the above method and convert it to
               // a bookmarklet that can easily be run on ANY AngularJS page.
               getWatchCount.bookmarklet = (
                   "javascript:alert('Watchers:'+(" +
                   getWatchCount.toString()
                       .replace(/\/\/.*/g, " ")
                       .replace(/\s+/g, " ") +
                   ")());void(0);"
               );
               return (getWatchCount);
           }
       );
// -------------------------------------------------- //
// -------------------------------------------------- //
// I turn the given scope value into an HREF attribute. This gets around the
// automatic sanitization that AngularJS is doing to prevent malicious scripts
// from being executed.
angular.module('nTechQuiz').directive(
    "bnBookmarklet",
    function () {
        // I bind the UI events to the current scope.
        function link($scope, element, attributes) {
            element.attr("href", $scope.$eval(attributes.bnBookmarklet));
        }
        // Return the directive configuration.
        return ({
            link: link,
            restrict: "A"
        });
    }
);