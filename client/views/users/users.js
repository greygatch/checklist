'use strict';

angular.module('checklist')
.controller('UsersCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){
  $scope.name = $state.current.name;

  // if state name is register, else...
  $scope.submit = function(user){
    if($scope.name === 'register'){
      User.register(user)
      .then(function(){
        $state.go('login');
      })
      .catch(function(err){
        console.error(err);
      });
    }
    else{
      User.login(user)
      .catch(function(err){
        console.error(err);
      });
    }
  };
}]);
