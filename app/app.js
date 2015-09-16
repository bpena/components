(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('myApp', [
            'directives',
            'ngMaterial',
            'ngMessages'
        ])
        .controller('MyController', ['$scope', function() {
            var vm = this;
            vm.valor = 30;

            vm.userState = '';
            vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });

            console.log(vm.states);
        }])
/*
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .dark();
        })
*/
    ;

})();

