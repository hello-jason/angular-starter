(function() {
  var app = angular.module('helloWorld', []);

  app.controller('HelloController', function($scope){
    $scope.hello = 'Hello',
    $scope.world = 'World';
  });

})();