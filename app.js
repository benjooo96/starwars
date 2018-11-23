var app = angular
    .module('starWars', []) // 'ngRoute'
    .controller("controller", function ($scope, $http) {
        $http
            .get("https://swapi.co/api/people")
            .then(function (adressen) {
                // people
                console.log(adressen)
                $scope.people = adressen.data.results[0];
            });
    });

