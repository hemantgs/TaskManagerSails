'use strict';

/* Services */

var AppServices = angular.module('TaskManager.service', ['TaskManager.RestCallService']);


AppServices.factory('TaskManagerFactory',['RestCallService', taskManagerFactory]);

function taskManagerFactory(RestCallService) {
    var obj = {};
    return {
        getAllTasks: getAllTasks,
        addTask: addTask,
        deleteTask: deleteTask,
        toggleTaskStatus: toggleTaskStatus,
        getAllTaskData: getAllTaskData,
        addTaskDur: addTaskDur,
        getTaskDur: getTaskDur

    };
    function getAllTasks() {
        return RestCallService.makeRestCall('/task/getTaskList', {}).then(function (taskList) {
            
            return taskList;
        }, function (error) {
            return error;
        });

    }

    function addTask(params) {
        return RestCallService.makeRestCall('/task/addTask', params).then(function (response) {
            return
        });
    }

    function deleteTask(taskTobeDeleted) {
        var params = {}
        params.id = taskTobeDeleted;
        return RestCallService.makeRestCall('/task/deleteTask', params).then(function (response) {

        });
    }

    function toggleTaskStatus(task) {
        return RestCallService.makeRestCall('/task/toggleTaskStatus', task).then(function (response) {
            return;
        });
    }

    function getAllTaskData() {
        return obj;
    }

    function addTaskDur(params) {
        return RestCallService.makeRestCall('/task/addTaskDuration', params).then(function (response) {
            return;
        });
    }

    function getTaskDur(params) {
        return RestCallService.makeRestCall('/task/getTaskDetails', params).then(function (response) {
            return response;
        })
    }
}



