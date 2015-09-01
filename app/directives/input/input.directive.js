(function() {
    'use strict';

    angular
        .module('directives', [])
        .directive('ptInput', ptInput);

    function ptInput() {
        var directive = {
            replace: true,
            scope: {
                ngModel: '=',
                title: '@'
            },
            template: "<md-input-container>\
                            <label>{{title}}</label>\
                            <input data-ng-model='ngModel' \
                        </md-input-container>"
        };

        return directive;
    }
})();