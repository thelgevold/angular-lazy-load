angular.module('module1',[]);

angular.module('module1').controller('module1Controller',['service1',function(service1){
    this.message = service1.getMessage();
}]);

angular.module('module1').factory('service1', function(){
    return{getMessage:function(){return 'Hello from lazy loaded service';}};
});