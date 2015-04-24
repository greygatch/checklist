'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){
  // return user tasks
  $scope.afTasks = Task.init();

  $scope.sort = function(sortString){
    var modifier = ($scope.taskOrder === sortString) ? '-' : '';
    $scope.taskOrder = modifier + sortString;
  }

  console.log('entering controller');

  $scope.addTask = function(task){

    // add properties to object
    task.dueDate = task.dueDate.getTime();
    task.createdAt = $window.Firebase.ServerValue.TIMESTAMP;
    task.isComplete = false;

    Task.add(task)
    .then(function(data){
      console.log(data);
      // reset task in scope once added
      $scope.task = {};
    });
  };

  $scope.deleteTask = function(task){
    Task.destroy(task);
  };

  $scope.editTask = function(task){
    task.dueDate = new Date(task.dueDate);
    $scope.task = task;
  };

  $scope.saveEdit = function(task){
    $scope.task = {};
    Task.save(task);
  }

  $scope.toggleComplete = function(task){
    task.dueDate = new Date(task.dueDate);
    Task.save(task);
  };

}]);
