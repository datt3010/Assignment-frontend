app.controller('updateaccount', function ($rootScope, $scope) {
    $scope.update = function () {
        $rootScope.lisths[$rootScope.indexUser] = angular.copy($rootScope.student);
        alert('Cập nhật thành công');
        window.location.href="#!layout"
    }
})