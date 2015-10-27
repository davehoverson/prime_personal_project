/**
 * Created by davidhoverson on 10/23/15.
 */

app.controller('CalculatorController', function($scope){

        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.a + $scope.b;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                return $scope.a / $scope.b;
            }
        };
    });