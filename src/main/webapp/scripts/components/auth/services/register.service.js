'use strict';

angular.module('demo2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


