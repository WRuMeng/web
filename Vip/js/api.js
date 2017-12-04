var App=angular.module('App',[]);
App.controller('shopController',['$scope','$http',function($scope,$http){
//	$scope.demo=new Demo();
	$http({
		url:'php/shop.php',
		method:'get'
	}).success(function(info){
		//console.log(info);
		$scope.items=info;
	});

}]);
App.controller('shoeController',['$scope','$http',function($scope,$http){
$http({
	url:'php/shoe.php',
	method:'get'
	}).success(function(info){
		//console.log(info);
		$scope.items=info;
	});

}]);
App.controller('doController',['$scope','$http',function($scope,$http){
$http({
	url:'php/do.php',
	method:'get'
	}).success(function(info){
		//console.log(info);
		$scope.items=info;
	});

}]);
App.controller('manController',['$scope','$http',function($scope,$http){
$http({
	url:'php/man.php',
	method:'get'
	}).success(function(info){
		console.log(info);
		$scope.items=info;
	});

}]);
App.controller('jewelryController',['$scope','$http',function($scope,$http){
$http({
	url:'php/jewelry.php',
	method:'get'
	}).success(function(info){
		//console.log(info);
		$scope.items=info;
	});
}]);
App.controller('lController',['$scope','$http',function($scope,$http){
$http({
	url:'php/list.php',
	method:'get'
	}).success(function(info){
		//console.log(info);
		$scope.items=info;
	});
}]);
