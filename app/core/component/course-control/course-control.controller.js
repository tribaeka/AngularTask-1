'use strict';

angular
    .module('courseControl')
    .controller('CourseControlController', function($rootScope, eventsFactory) {
        var $ctrl = this;
        $ctrl.showFromForAdd = false;

        $ctrl.applyFilter = function() {
            console.log('filter value = ' + $ctrl.inputFilterValue);
            $rootScope.$broadcast(eventsFactory.sendFiltersInputValueToCoursesFilterEvent, $ctrl.inputFilterValue);
            $ctrl.inputFilterValue = '';
        };

        $ctrl.toggleFormForAdd = function() {
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
            $rootScope.$broadcast(eventsFactory.toggleVisibilityFormForAddEvent, $ctrl.showFromForAdd);
        };
    });
