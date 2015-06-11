angular.module('module1').controller('module1Controller',['service1',function(service1){
    this.message = service1.getMessage();
}]);