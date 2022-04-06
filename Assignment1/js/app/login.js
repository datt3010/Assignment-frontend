app.controller("login",function($scope,$http,$rootScope){
    $http.get("../js/Students.js").then(function(res){
        $scope.lisths=res.data;
      });
$scope.dangnhap=function(){
  var u=$scope.username;
  var p=$scope.password;
  var tc=false;
   $scope.lisths.forEach(hs => {
     if(hs.username==u){
       if(hs.password==p){
            $scope.lisths=hs;
            $rootScope.User=hs;
            $rootScope.indexUser=hs.index;
          window.location.href="#!layout";
          tc=true;
          return;
       };
     };
   });
   if(tc==false){
     alert('Login Failed');
     window.location.href="#!dangnhap"
   }
}
});