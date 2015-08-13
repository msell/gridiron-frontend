/* jshint -W117, -W030 */
describe('rankings routes', function () {
    describe('state', function () {
        var view = 'app/rankings/rankings.html';

        beforeEach(function() {
            module('app.rankings', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state rankings to url /rankings ', function() {
            expect($state.href('rankings', {})).to.equal('/');
        });

        it('should map /rankings route to rankings View template', function () {
            expect($state.get('rankings').templateUrl).to.equal(view);
        });

        it('of rankings should work with $state.go', function () {
            $state.go('rankings');
            $rootScope.$apply();
            expect($state.is('rankings'));
        });
    });
});
