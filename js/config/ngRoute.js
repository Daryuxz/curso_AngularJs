'use strict';
angular.module('stockApp')
.config('$routeProvider', function(routeProvider){
    routeProvider
    .when ("/stock/list",{
        templateUrl : "partials/stock/add.html"
    })
     .when ("/stock/list",{
        templateUrl : "partials/stock/stock.html"
    })

});