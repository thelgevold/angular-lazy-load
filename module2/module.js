angular.module('module2',[]);

angular.module('module2').controller('module2Controller',function(){
    this.message = 'Hello from a lazy loaded controller';
});

angular.module('module2').directive('greeting', function(){

    return {
        template:'<div>{{message}}</div>',

        link:function($scope){
            $scope.message = 'hello from a directive';
        }};
});