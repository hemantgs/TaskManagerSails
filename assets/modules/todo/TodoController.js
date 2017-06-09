App.controller('TodoController', ['$scope', '$http', 'TaskManagerFactory', function ($scope, $http, TaskManagerFactory) {
    $scope.errorObj = '';
    $scope.getAllTasks = function () {
        TaskManagerFactory.getAllTasks().then(function (response) {
            $scope.tasks = response;
        }, function (error) {
            $scope.setError('An unexpected error has ocurred');
        });
    };

    $scope.addTodo = function (newTask) {

        var params = {}
        params.task = newTask;
        TaskManagerFactory.addTask(params).then(function (response) {
            $scope.getAllTasks();
        }, function (error) {
            $scope.setError('An unexpected error has ocurred');
        });
        $scope.taskName = '';
    };

    $scope.deleteTask = function (taskToDelete) {
        TaskManagerFactory.deleteTask(taskToDelete).then(function (response) {
            $scope.getAllTasks();
        }, function (error) {
            $scope.errorObj = $scope.setError('An unexpected error has ocurred');
        });
    };

    $scope.toggleStatus = function (task) {
        if (task.status === 0) {
            task.status = 1;
        }
        else {
            task.status = 0;
        }
        TaskManagerFactory.toggleTaskStatus(task).then(function (response) {
            $scope.getAllTasks();
        }, function () {
            $scope.errorObj = $scope.setError('An unexpected error has ocurred');
        });
    };
    $scope.resetTodoField = function () {
        $scope.resetError();
        $scope.todoName = '';
        $scope.editMode = false;
    };

    $scope.resetError = function () {
        $scope.error = false;
        $scope.errorMessage = '';
    };
    $scope.setError = function (message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };


    $scope.getAllTasks();
}]);