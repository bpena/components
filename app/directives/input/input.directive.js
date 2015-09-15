(function() {
    'use strict';

    angular
        .module('components', [])
        .directive('ptInput', ptInput)
        .directive('ptSelect', ptSelect)
    ;

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

    function ptSelect() {
        var directive = {
            replace: true,
            scope: {
                ngModel: '=',
                title: '@',
                optionLabel: '@',
                values: '='
            },
            //buscar e intentar con compile, para poder pasar o utilizar optionLabel en el md-option
            template: "<md-input-container>\
                           <label>{{title}}</label>\
                           <md-select data-ng-model='ngModel'>\
                               <md-option data-ng-repeat='object in values' value='{{object.optionLabel}}'>{{object[{{optionLabel}}] }}</md-option>\
                           </md-select>\
                       </md-input-container>"
        };

        return directive;
    }
})();