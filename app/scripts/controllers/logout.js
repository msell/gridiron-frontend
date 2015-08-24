'use strict';

angular.module('gridironFrontend')
    .controller('LogoutCtrl', function ($auth, $state) {
        $auth.logout();
        $state.go('main');
    });