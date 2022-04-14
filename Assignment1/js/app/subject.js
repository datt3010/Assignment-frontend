app.controller("monhoc",function($scope,$http,$routeParams,$rootScope){
  $scope.cacmonhoc = [];
  $scope.pageSize=4;
  $scope.start = 0;
  $http.get("../js/Subjects.js").then(function(d){
      $scope.cacmonhoc=d.data;
  });
    $scope.next=function(){
      if($scope.start<$scope.cacmonhoc.length-$scope.pageSize){
        $scope.start+=$scope.pageSize;
      }
    }
    $scope.prev=function(){
      if($scope.start>0){
        $scope.start-=$scope.pageSize;
      }
    }
    $scope.first=function(){
      $scope.start=0;
    }
    $scope.last=function(){
      sotrang=Math.ceil($scope.cacmonhoc.length/$scope.pageSize);
      $scope.start=(sotrang-1)*$scope.pageSize;
    }
  });