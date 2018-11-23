var app = angular
    .module('starWars', []) // 'ngRoute'
    .controller("controller", function ($scope, $http) {
        $http
            .get("https://swapi.co/api/people")
            .then(function (adressen) {
                // people
                //    console.log(adressen)
                $scope.people = adressen.data.results
                // nödlösning med extra variabel
                var folk = []

                $scope.people.forEach(element => {
                    console.log(element.name)
                    $scope.folk = folk.push(element.name)
                });
            });
    });

