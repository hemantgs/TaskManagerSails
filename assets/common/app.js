'use strict';

var TaskManager = {};

var App = angular.module('TaskManager', ['TaskManager.filters', 'TaskManager.service', 'TaskManager.directives', 'TaskManager.RestCallService',
    'ui.bootstrap', 'ui.router']);

// Declare app level module which depends on filters, and service
App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('todo', {
            url: '/todo',
            templateUrl: 'modules/todo/layout.html',
            controller: 'TodoController'
        }).state('taskDetail', {
            url: '/taskDetail',
            templateUrl: 'modules/detail/task-detail.html',
            params: { taskObj: null },
            controller: 'TaskDetailController'
        }).state('dashboard', {
            url: '/dashboard',
            templateUrl: 'modules/dashboard/dashboard.html',
            controller: 'DashboardController'
        });
    $urlRouterProvider.otherwise('/todo');
}]);


