'use strict'
var app = angular.module('stockApp');
app.filter('codeFormat', function(){
    return function(data) {
        var value = "";
        var prefix = data.substr(0,2);
        var sufix = data.substr(2);
        value = prefix + '-' + sufix;
        return value;
    }
});