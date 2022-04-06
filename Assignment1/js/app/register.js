app.controller("dangky",funct);
function funct($scope){
$scope.dangky1=function(){
    var u=$scope.username;
    var cf=$scope.confirmpassword;
    var p=$scope.password;
    var f=$scope.firstname;
    var l=$scope.lastname;
    var e=$scope.email;
    var ph=$scope.phonenumber;
    var sv;
    var flat=true;
      sv=$scope.lisths;
    if(u==null){
      flat=false;
    }
     else if(p==null){
      flat=false;
    }
    else if(cf==null){
      flat=false;
    }
    else if(cf!=p){
      flat=false;
    }
    else if(f==null && l==null){
     flat=false;
    }
    else if(ph==null){
      flat=false;
    }
    if(flat){
      localStorage.setItem("username",sv.username);
      localStorage.setItem("password",sv.password);
      localStorage.setItem("lastname",sv.lastname);
      localStorage.setItem("firstname",sv.firstname);
      localStorage.setItem("email",sv.email);
      localStorage.setItem("phonenumber",sv.phonenumber);
      alert('đăng ký thành công');
      document.location="index.html"
    }
    else{
      alert('đăng ký thất bại');
    }
}}