/**
 * Created by davidhoverson on 10/20/15.
 */
app.controller('BudgetController', ['$scope', '$http', function($scope, $http) {

    $scope.months = [];

    var getMonths = function(){
        $http({
            method: 'GET',
            url: "/data/getMonths"
        }).then(function(response){
        console.log(response);
        //for (var i=0; i <response.data.length; i++){
        //    $scope.months.push(response.data[i]);
        //}
        });
    };
    getMonths();



    $scope.connectiongood = "Budget Active";

}]);