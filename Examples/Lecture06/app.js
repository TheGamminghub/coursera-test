(function () {
'use strict';

  angular.module('NameCalculator', [])
  .controller('NameCalculatorController',function($scope){
    $scope.name="";
    $scope.totalvalue=0;

    $scope.displayNumeric = function() {
      var totalNamevalue = calculatNumericForString($scope.name);

      $scope.totalvalue=totalNamevalue;
    };
    function calculatNumericForString(string) {
      var totalStringValue=0;
      for(var i=0; i < string.length; i++){
        totalStringValue=string.charCodeAt(i)+totalStringValue;
      }
      return totalStringValue;
    }
  });


})();
