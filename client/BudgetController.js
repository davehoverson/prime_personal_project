/**
 * Created by davidhoverson on 10/20/15.
 */
app.controller('BudgetController', ['$scope', '$http', function($scope, $http) {

    $scope.categories = [];

    var getCategories = function(){
        $http({
            method: 'GET',
            url: "/data/getCategories"
        }).then(function(response){
            //console.log(response);
            for (var i=0; i <response.data.length; i++){
                $scope.categories.push(response.data[i]);
            }
        });
        //console.log($scope.categories);
    };
    getCategories();

    $scope.edit = function(cat) {

        //$scope.categories[index].total = $("#a"+index).val();
        //$scope.categories[index].actual = 100;
        $http.post(
            '/data/edit',
            cat
            //$scope.categories[index]
        );
    };

    $scope.delete = function(cat) {
        $http.delete(
            '/data/remove',
            cat
        );
        console.log(cat);
    };



    $scope.connectiongood = "Budget Active";

}]);