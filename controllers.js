// Models:
// Positions will have Projects, which can be tagged with Skills

var resumeApp = angular.module("resumeApp", []);

resumeApp.controller("NavigationController", function($scope, $http) {
	$http.get("positions.json").then(function(res) {
		$scope.positions = res.data;
	});
});

resumeApp.controller("ExperienceController", function($scope, $http) {
	$http.get("positions.json").then(function(res) {
		$scope.positions = res.data;
		$scope.formatSkills = function(proj) {
			return proj.skills.map(function(s){return "#"+s;}).join(" ");
		};
	});
});
