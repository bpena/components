(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('myApp', [
            'directives',
            'ngMaterial',
            'ngMessages'
        ])
        .controller('MyController', ['$scope', function($scope) {
            $scope.valor = 30;
        }])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .dark();
        });

})();

