(function () {
'use strict';

  angular.module('myFirstApp', [])
  .controller('myFirstController',function($scope){
    $scope.name="TheGaminghub";
    $scope.sayHello=function functionName() {
      return "Hello TheGaminghub";
    }
  });

})();
