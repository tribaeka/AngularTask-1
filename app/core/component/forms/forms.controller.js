'use strict';

angular
    .module('forms')
    .controller('formsController', function($rootScope, courseService, eventsFactory) {
        var $ctrl = this;
        $ctrl.showFormForEdit = false;

        $rootScope.$on(eventsFactory.toggleVisibilityFormForAddEvent, function(event, data) {
            $ctrl.showFromForAdd = data;
        });

        $ctrl.addCourse = function() {
            var course = {
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                duration: $ctrl.courseDuration,
                creationDate: new Date().toISOString()
            };
            courseService.addCourse(course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.courseDuration = '';
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
        };

        $rootScope.$on(eventsFactory.courseExchangeWithEditForm, function(event, data) {
            $ctrl.toEditCourse = data;
            $ctrl.showFormForEdit = !$ctrl.showFormForEdit;
        });

        $ctrl.editCourse = function() {
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.showFormForEdit = !$ctrl.showFormForEdit;
        };
    });
