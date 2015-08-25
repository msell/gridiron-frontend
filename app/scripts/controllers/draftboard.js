(function () {
  'use strict';

  angular.module('gridironFrontend')
    .controller('DraftboardCtrl', function ($scope, $http, configuration, alert, $auth, $state) {

      if (!$auth.isAuthenticated()) {
        $state.go('login');
      }

      //            $scope.addEntry = function () {
      //                $scope.weighIns.push({
      //                    'weight': $scope.weight,
      //                    'date': $scope.date
      //                });
      //
      //            };

      $scope.pageSize = 50;
      $scope.pageNumber = 1;     
      $scope.players = [];



      $http.get(configuration.apiUrl + 'player?limit=' + $scope.pageSize + '&skip=' + $scope.pageNumber * $scope.pageSize - $scope.pageSize)
        .success(function (data) {
        $scope.players = data;
      }).error(function (err) {
        alert('warning', 'unable to get player data', err.message);
      })
    });

})();