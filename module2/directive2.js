angular.module('module2').directive('greeting', function(){

    return {
        template:'<div>{{message}}</div>',

        link:function($scope){
            $scope.message = 'hello from a directive';
        }};
});