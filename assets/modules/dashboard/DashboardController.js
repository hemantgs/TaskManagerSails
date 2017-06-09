
App.controller('DashboardController', ['$scope', 'TaskManagerFactory', 'RestCallService', function ($scope, TaskManagerFactory, RestCallService) {

    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin: {
                top: 20,
                right: 20,
                bottom: 60,
                left: 55
            },
            x: function (d) {
                return d.label;
            },
            y: function (d) {
                return d.value;
            },
            showValues: true,
            valueFormat: function (d) {
                return d3.format(',.2f')(d);
            },
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: 30
            },
            yDomain: [0, 10]
        }
    };


    $scope.buildGraphData = function () {
        var task = $scope.selectedTask;

        RestCallService.makeRestCall('http://localhost:8080/CodeChallenge/getDashBoardData', task).then(function (response) {
            var graphData = response;
            $scope.data = [{
                key: "Cumulative Return",
                values: [
                    { "label": "Day 1", "value": parseFloat(graphData[0], 10) },
                    { "label": "Day 2", "value": parseFloat(graphData[1], 10) },
                    { "label": "Day 3", "value": parseFloat(graphData[2], 10) },
                    { "label": "Day 4", "value": parseFloat(graphData[3], 10) },
                    { "label": "Day 5", "value": parseFloat(graphData[4], 10) },
                    { "label": "Day 6", "value": parseFloat(graphData[5], 10) },
                    { "label": "Day 7", "value": parseFloat(graphData[6], 10) },

                ]
            }]
        }, function (response) {

        });

    };


    $scope.getAllTodos = function () {
        $scope.todos = TaskManagerFactory.getAllTaskData();
    };
    $scope.getAllTodos();
}]);