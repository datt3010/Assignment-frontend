app.controller("loadquiz",function($scope,$rootScope,$http,$routeParams,$timeout){
  $scope.caccauhoi=[];
  $scope.counter = 600;
  $scope.start = 0;
  $scope.tongdiem = 0;
  $scope.pageSize=1;
  $scope.idMH=$routeParams.idMH;
  $rootScope.tenMH=$routeParams.tenMH;
  $http.get("../js/Quizs/"+$scope.idMH+".js").then(
      function(d){
        $scope.caccauhoi=d.data;
      },
      function(d){
        alert('Lỗi không load được các môn học !!');
      }
  );
  $scope.mark = function () {
    let x = document.getElementsByName("pa");
    let dodai = x.length;
    for (let i = 0; i < dodai; i++){
      if (x[i].checked) {
        var dapan = x[i].value;
      }
     
    }
    var checkdapan = false;
    for (let a of $scope.caccauhoi) {
      if (dapan == a.AnswerId) {
        alert('Đúng');
        $scope.start+=$scope.pageSize;
        checkdapan = true;
        $scope.tongdiem += 1;
      }

    }
    if (!checkdapan) {
      alert('sai');
      $scope.start+=$scope.pageSize;
    }
  }
  $scope.nopbai = function(){
    var a = confirm("bạn có muốn nộp bài không ?");
    if (a == true) {
      if ($scope.tongdiem < 5) {
        alert('học ngu quá :(: '+$scope.tongdiem);
      }
     else  if ($scope.tongdiem >= 5) {
        alert('oke rồi đó <3: '+$scope.tongdiem);
      }
      document.location = "#!layout";
    }
  }
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
     $scope.start = (sotrang - 1) * $scope.pageSize;
     $scope.flat = true;
    }
  });
  app.filter('secondsToDateTime', [function() {
    return function(seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  }]);