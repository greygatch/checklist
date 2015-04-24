'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){
  $scope.addTask = function(task){

    // add properties to object
    task.duedate = task.dueDate.getTime();
    task.createdAt = $window.Firebase.ServerValue.TIMESTAMP;
    task.isComplete = false;

    Task.add(task)
    .then(function(data){
      console.log(data);
    });
  };
}])
