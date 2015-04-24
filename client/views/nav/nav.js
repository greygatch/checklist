'use strict';

angular.module('checklist')
.controller('NavCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){

  // if user data is broadcast, he is active user, else empty it.
  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
    }
    else{
      $rootScope.activeUser = null;
    }
    $state.go('home');
  });


  $scope.logout = function(){
    User.logout();
  };
}])
