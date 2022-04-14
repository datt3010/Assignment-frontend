app.controller('changepass', function ($rootScope, $scope) {
    $scope.changepass = function () {
        if ($rootScope.student.password == $scope.oldpass) {
            if ($rootScope.student.password == $scope.student1.password) {
                alert('Mật khẩu mới trùng mật khẩu cũ');
            }
            else {
                $rootScope.student.password = $scope.student1.password;
                $rootScope.lisths[$rootScope.indexUser] = angular.copy($rootScope.student);
                alert('Đổi mật khẩu thành công');
                window.location.href = "#!dangnhap";
            }
        }
        else {
            alert('Mật khẩu cũ không đúng');
        }
        $scope.oldpass = "";
        $scope.student1.password = "";
        $scope.renewpassword = "";
   } 
});
app.directive("compareTo", function ()  
{  
    return {  
        require: "ngModel",  
        scope:  
        {  
            confirmPassword: "=compareTo"  
        },  
        link: function (scope, element, attributes, modelVal)  
        {  
            modelVal.$validators.compareTo = function (val)  
            {  
                return val == scope.confirmPassword;  
            };  
            scope.$watch("confirmPassword", function ()  
            {  
                modelVal.$validate();  
            });  
        }  
    };  
});  