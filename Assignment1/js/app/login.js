app.controller("login",function($scope,$rootScope){
$scope.dangnhap=function(){
  var u=$scope.username;
  var p=$scope.password;
  var tc=true;
   $rootScope.lisths.forEach(hs => {
     if(hs.username==u){
       if (hs.password == p) {
           $rootScope.indexUser=hs.index;
            $rootScope.student=hs;
          window.location.href="#!layout";
          tc=false;
          return;
       };
     };
   });
   if(tc==true){
     alert('Login Failed');
     window.location.href="#!dangnhap"
   }
}
});