var App=angular.module("App",[]);App.controller("shopController",["$scope","$http",function(o,t){t({url:"php/shop.php",method:"get"}).success(function(t){o.items=t})}]),App.controller("shoeController",["$scope","$http",function(o,t){t({url:"php/shoe.php",method:"get"}).success(function(t){o.items=t})}]),App.controller("doController",["$scope","$http",function(o,t){t({url:"php/do.php",method:"get"}).success(function(t){o.items=t})}]),App.controller("manController",["$scope","$http",function(o,t){t({url:"php/man.php",method:"get"}).success(function(t){console.log(t),o.items=t})}]),App.controller("jewelryController",["$scope","$http",function(o,t){t({url:"php/jewelry.php",method:"get"}).success(function(t){o.items=t})}]),App.controller("lController",["$scope","$http",function(o,t){t({url:"php/list.php",method:"get"}).success(function(t){o.items=t})}]);