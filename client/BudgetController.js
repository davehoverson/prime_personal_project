/**
 * Created by davidhoverson on 10/20/15.
 */
app.controller('BudgetController', ['$scope', '$http', function($scope, $http) {

    $scope.other = [];
    $scope.savings = [];
    $scope.housing = [];
    $scope.food = [];
    $scope.transportation = [];
    $scope.clothing = [];
    $scope.medical = [];
    $scope.personal = [];
    $scope.recreation = [];

    var getCategories = function(){
        $http({
            method: 'GET',
            url: "/data/getCategories"
        }).then(function(response){
            //console.log(response.data[2].subcat);
            for (var i=0; i <response.data.length; i++){
                if (response.data[i].subcat == 'Savings') {
                    $scope.savings.push(response.data[i])
                } else if (response.data[i].subcat == 'Housing') {
                    $scope.housing.push(response.data[i])
                } else if (response.data[i].subcat == 'Food') {
                    $scope.food.push(response.data[i])
                } else if (response.data[i].subcat == 'Transportation') {
                    $scope.transportation.push(response.data[i])
                } else if (response.data[i].subcat == 'Clothing') {
                    $scope.clothing.push(response.data[i])
                } else if (response.data[i].subcat == 'Medical') {
                    $scope.medical.push(response.data[i])
                } else if (response.data[i].subcat == 'Personal') {
                    $scope.personal.push(response.data[i])
                } else if (response.data[i].subcat == 'Recreation') {
                    $scope.recreation.push(response.data[i])
                } else
                    $scope.other.push(response.data[i]);
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
        if(confirm('PLEASE CONFIRM TO DELETE THE ' + cat.item + ' CATEGORY.'))
        $http.delete(
            '/data/remove/' + cat._id,
            cat
        );
        $scope.categories = [];
        getCategories();
    };

}]);