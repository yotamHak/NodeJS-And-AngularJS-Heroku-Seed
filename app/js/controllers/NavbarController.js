'use strict';

myApp.controller('NavbarController',
    function NavbarController($scope, $location) {
        $scope.main = function(){
            $location.url('/main');
        };
        $scope.view1 = function(){
            $location.url('/view1');
        };
        $scope.view2 = function(){
            $location.url('/view2');
        };
});