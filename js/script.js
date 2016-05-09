var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {
	
	$http.get('data.json').success(function(data) {
     	$scope.myWelcome = data.companies;
     	
	});
});

app.controller('shCtrl', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});

$(function() {
	cbpBGSlideshow.init();
});


		