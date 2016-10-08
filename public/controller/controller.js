var app = angular.module('myApp', []);

app.controller("AppCtrl",function($scope , $http){
	console.log("Its all ogre now");
	var refresh = function(){
	$http.get("/contactlist").success(function(re){
		console.log("I got the data i requested");
		$scope.contact=re;
	});};

	refresh();

	$scope.addcontact=function(){
		
		$http.post('/contactlist',$scope.contact1).success(function(err,data){
		refresh();
		console.log(data);
	})
	};

	$scope.deletecontact=function(id){
		$http.delete('/contactlist/' + id).success(function(res){
			console.log(res);
			refresh();
		})};
	$scope.editcontact=function(id){
		$http.get('/contactlist/' + id).success(function(res){
			$scope.contact1 = res;
		});};
	$scope.updatecontact=function(){
		console.log($scope.contact1._id)
		$http.put('/contactlist/'+$scope.contact1._id,$scope.contact1)
	};
});