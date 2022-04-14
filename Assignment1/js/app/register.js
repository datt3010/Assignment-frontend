app.controller('dangky', function ($rootScope,$http, $scope) {
  $scope.register=function(){
    $rootScope.lisths.push(angular.copy($scope.student1));
    $scope.student1={};
    $scope.repassword = '';
    alert('dang ky thanh cong');
    window.location.href = "#!dangnhap";
  }
})