var app = angular.module("stockApp")
app.directive("buttonsDirective", function(){
    return{
        template : '<a href="add.html">Agregar Producto</a>'  
        
    };
});