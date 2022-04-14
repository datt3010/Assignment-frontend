app.controller('quenmatkhau', function ($rootScope, $scope) {
    $scope.getpass = function () {
        var check = true;
        $rootScope.lisths.forEach(st => {
            if (st.email == $scope.email && st.username == $scope.username) {
                alert('lấy mật khẩu thành công');
                alert('mật khẩu là: ' + st.password);
                window.location.href = "#!dangnhap"
                check = false;
                return;
            }  
        });
       if(check) {
                alert('lấy mật khẩu thất bại');
            }
    }
})