angular.module('stockApp', [])
.controller('StockController', function($scope){
    $scope.products = [
        {code:'0001', description:'IPhone 7', price:700, active:true, notes:'La esencia del iPhone a su máxima expresión', picture:'0001.png'},
        {code:'0002', description:'Samsung Galaxy S7 Edge', price:650, active:true, notes:'Equilibrio perfecto entre forma y funcionalidad', picture:'0002.png'},
        {code:'0003', description:'Microsoft 640 XL', price:350, active:true, notes:'Tu nuevo compañero de oficina móvil', picture:'0003.png'}
    ];
});