var app = angular.module('minmax',[]);

app.controller('MinMaxCtrl',function($scope,$http){
	$scope.formModel={};
	$scope.onSubmit=function(){
		console.log("Hey i`m submitted");

		$http.post('https://minmax-server.herokuapp.com/register/',$scope.formModel).
		sucess(function(data){
			console.log(':)');
		}).error(function(data){
			console.log(':(');
		});
	};
});