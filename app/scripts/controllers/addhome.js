/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

/**
* @ngdoc function
* @name tp6App.controller:AddhomeCtrl
* @description
* # AddhomeCtrl
* Controller of the tp6App
*/
angular.module('tp6App')
.controller('AddhomeCtrl', function ($scope, $http, $compile) {
    $scope.numHeaters = -1;
    $scope.home = {
        address : null,
        size : null,
        nbRooms : null,
        heaters : []
    };
    $scope.heaters = {consumption : 66};
    // $scope.heaters = [{consumption : 66}];
    $scope.$watch('address', function(address){
        $scope.home.address = address;
    });
    $scope.$watch('nbRooms', function(nbRooms){
        $scope.home.nbRooms = nbRooms;
    });
    $scope.$watch('size', function(size){
        $scope.home.size = size;
    });

    $scope.checkHeaters = function(){
        for (var i = 0; i <= $scope.numHeaters; i++) {
            $scope.$watch('heater' + i, function(heater){
                var match = _.some($scope.home.heaters, function(h){
                    return h.id === i;
                });
                if (match === false){
                    $scope.home.heaters.push({consumption : heater, id: i});
                }
                else {
                    _.map($scope.home.heaters, function(h){
                        if (h.id === i){
                            h.consumption = heater;
                        }
                    });
                }
            });
        }
    };

    $scope.addheater = function(){
        $scope.numHeaters++;
        $("#myform").append($compile("<div class=\"form-group\"><label for=\"nvheater" + $scope.numHeaters + "\">heater" + $scope.numHeaters + " :</label>"
        + "<input type=\"text\" ng-model=\"heater" + $scope.numHeaters + "\" name=\"heater" + $scope.numHeaters + "\" placeholder=\"consumption\"></input></div>")($scope));
        $scope.checkHeaters();
    };

    $scope.posthome = function(){
        _($scope.home.heaters).forEach(function(h){
            delete h.id;
        });
        $http({
            method: 'POST',
            url: '/rest/home/add',
            data: $scope.home
        }).then(function(response) {
            console.log(response);
        })
        .catch(function(error){

        })
        ;
    };
});
