(function () {
    'use strict';

    angular
        .module('app.rankings')
        .controller('RankingsController', RankingsController);

    RankingsController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function RankingsController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'gridiron',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Rankings';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Rankings View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
