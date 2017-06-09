'use strict';

/* Filters */

var AppFilters = angular.module('TaskManager.filters', []);


AppFilters.filter('parseData', function () {
    return function (input) {
        return parseFloat(input, 10);
    };
})