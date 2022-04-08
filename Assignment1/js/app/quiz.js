app.controller("loadquiz",function($scope,$http,$routeParams,$timeout){
  $scope.caccauhoi=[];
  $scope.counter=600;
  $scope.start=0;
    $scope.pageSize=1;
    $scope.idMH=$routeParams.idMH;
    $scope.tenMH=$routeParams.tenMH;
    $http.get("../js/Quizs/"+ $scope.idMH+".js").then(
      function(d){
        $scope.caccauhoi=d.data;
      },
      function(d){
        alert('Lỗi không load được các môn học !!');
      }
    );
    $scope.onTimeout = function() {
      if ($scope.counter > 0) $scope.counter--;
      mytimeout = $timeout($scope.onTimeout, 1000);
    }
    var mytimeout = $timeout($scope.onTimeout, 1000);
    $scope.next=function(){
      if($scope.start<$scope.caccauhoi.length-$scope.pageSize){
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
      sotrang=Math.ceil($scope.caccauhoi.length/$scope.pageSize);
      $scope.start=(sotrang-1)*$scope.pageSize;
    }
    $scope.checkAnswer=function(){
      if(!$('input[name=pa]:checked'.length))return;
      var ans=$('input=[name=pa]:checked').val();
      // if(ans==$scope.pa){
      //   alert('dung');
      // }
      // else{
      //   alert('sai');
      // }
    }
  });
  app.filter('secondsToDateTime', [function() {
    return function(seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  }]);