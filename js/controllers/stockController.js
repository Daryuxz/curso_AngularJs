angular.module('stockApp', [])
.controller('StockController', function($scope){
    $scope.products = [
        {code:'0001', description:'IPhone 7', price:700, active:true, notes:'Olala señor Apple'},
        {code:'0002', description:'Samsung Galaxy S7 Edge', price:650, active:true, notes:'Olala señor Samsung'},
        {code:'0003', description:'Microsoft 640 XL', price:350, active:true, notes:'Olala señor Microsoft'}
    ];
});