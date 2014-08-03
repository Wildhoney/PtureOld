(function($angular) {

    /**
     * @module Pture
     * @controller IndexController
     */
    $angular.module('ptureApp').controller('IndexController', ['$scope', function IndexController($scope) {

        /**
         * @constant APP_NAME
         * @type {String}
         */
        $scope.APP_NAME = 'Pture';

    }]);

})(window.angular);