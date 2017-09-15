
angular.module("myApp",["ngRoute","route","in_theatersMoudel","myServiceModule","coming_soonModule","searchModule"])
.controller("navBarCtrl",["$scope","$location",function($scope,$location){
     $scope.isActive="in_theaters";
    $scope.search=function(){
        //alert($scope.keyword);
        $location.path("/search/"+$scope.keyword+"/1");
    }


}])