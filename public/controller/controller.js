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
		console.log(data);
		refresh();
	});
	};

	$scope.deletecontact=function(id){
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(res){
			refresh();
		})};
	$scope.editcontact=function(id2){
		$http.get('/contactlist/' + id2).success(function(res){
			$scope.contact1 = res;
		});	
}
});