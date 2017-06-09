App.controller('TaskDetailController', ['$scope', '$filter', '$http', '$stateParams', 'TaskManagerFactory', function ($scope, $filter, $http, $stateParams, TaskManagerFactory) {
    $scope.taskDetail = {};
    $scope.startTime = 0;
    $scope.endTime = 0;

    $scope.addDuration = function () {
        var params = {};
        params.startTimeString = $filter('date')($scope.startTime, "yyyy/MM/dd HH:mm:ss")
        params.endTimeString = $filter('date')($scope.endTime, "yyyy/MM/dd HH:mm:ss");
        params.taskId = $scope.taskDetail.id;
        TaskManagerFactory.addTaskDur(params).then(function (response) {
            $scope.getDurations();
            $scope.startDate = 0;
            $scope.endDate = 0;

        }, function (response) {

        });
    };

    $scope.getDurations = function () {
        var params = $stateParams.taskObj;
        TaskManagerFactory.getTaskDur(params).then(function (response) {

            $scope.taskDetail = response;
            // for (var i = 0; i < response.taskdetails.length; i++) {
            //     var difference = new Date($filter('date')(response.taskdetails[0].endTime, "yyyy/dd/MM hh:mm:ss")).getHours() - new Date($filter('date')(response.taskdetails[0].startTime, "yyyy/dd/MM hh:mm:ss")).getHours();
            //     // var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
            //     // difference -= hoursDifference * 1000 * 60 * 60
            //     $scope.taskDetail.taskdetails[i].durGap = difference;
            // }
        }, function (response) {

        });
    };


    $scope.getDurations();
}]);