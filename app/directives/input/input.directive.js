(function() {
    'use strict';

    angular
        .module('directives', [])
        .directive('ptInput', ptInput)
        .directive('ptSelect', ptSelect);

    function ptInput() {
        var directive = {
            replace: true,
            scope: {
                ngModel: '=',
                title: '@',
                type: '@',
                placeholder: '@',
                inputId: '@'
            },
            //template: "<md-input-container>\
            //               <label>{{title}}</label>\
            //               <input data-ng-model='ngModel' \
            //           </md-input-container>",
            template: "<div class='form-group'>\
                           <label for='{{inputId}}'>{{title}}</label>\
                           <input type='{{type}}' id='{{inputId}}' class='form-control' placeholder='{{placeholder}}'>\
                       </div>"
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
                optionValue: '@',
                values: '='
            },
            //buscar e intentar con compile, para poder pasar o utilizar optionLabel en el md-option
            template: function(elem, attr) {
                var optionValue = ['object', (attr.optionValue || attr.optionLabel)].filter(function(n){ return n != undefined }).join('.');
                var optionLabel = ['object', (attr.optionLabel || attr.optionValue)].filter(function(n){ return n != undefined }).join('.');
                return "<md-input-container>\
                            <label>{{title}}</label>\
                            <md-select data-ng-model='ngModel'>\
                                <md-option data-ng-repeat='object in values' value='{{" + optionValue + "}}'>{{"+ optionLabel + "}}</md-option>\
                            </md-select>\
                        </md-input-container>"
            }
        };

        return directive;
    }
})();