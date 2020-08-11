(function () {
'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject=['$scope'];
  function MsgController($scope){
    $scope.name="TheGaminghub";
    $scope.stateOfBeing="hungry";

    $scope.sayMessage =function () {
      return "TheGaminghub likes to eat healthy snacks at night";
    };

    $scope.feedTheGaminghub= function () {
      $scope.stateOfBeing= "fed";
    };
  }


})();
