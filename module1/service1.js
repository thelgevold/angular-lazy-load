angular.module('module1').factory('service1', function(){
    return{getMessage:function(){return 'Hello from lazy loaded service';}};
});