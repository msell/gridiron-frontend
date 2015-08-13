(function () {
    'use strict';

    angular
        .module('app.rankings')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'rankings',
                config: {
                    url: '/rankings',
                    templateUrl: 'app/rankings/rankings.html',
                    controller: 'RankingsController',
                    controllerAs: 'vm',
                    title: 'rankings',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-dashboard"></i> Rankings'
                    }
                }
            }
        ];
    }
})();
