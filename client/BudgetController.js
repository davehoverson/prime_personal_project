/**
 * Created by davidhoverson on 10/20/15.
 */
app.controller('BudgetController', ['$scope', '$http', function($scope, $http) {

    $scope.other = [];
    $scope.savings = [];
    $scope.housing = [];
    $scope.utilities = [];
    $scope.food = [];
    $scope.transportation = [];
    $scope.clothing = [];
    $scope.medical = [];
    $scope.personal = [];
    $scope.recreation = [];
    $scope.all = [];
    $scope.income = [];

    //$scope.monies = [];
    //monies[response.data[i].subcat

    var getCategories = function(){
        $http({
            method: 'GET',
            url: "/data/getCategories"
        }).then(function(response){
            //$scope.all.push(response.data);
            //console.log($scope.all[0][1].total);
            //console.log(response.data[2].subcat);
            for (var i=0; i <response.data.length; i++) {
                if (response.data[i].subcat == 'Savings') {
                    $scope.savings.push(response.data[i]);
                    //$scope.all.push(response.data[i])
                } else if (response.data[i].subcat == 'Housing') {
                    $scope.housing.push(response.data[i])
                } else if (response.data[i].subcat == 'Food') {
                    $scope.food.push(response.data[i])
                } else if (response.data[i].subcat == 'Utility') {
                    $scope.utilities.push(response.data[i])
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
                } else if (response.data[i].subcat == 'Income') {
                    $scope.income.push(response.data[i])
                } else
                    $scope.other.push(response.data[i]);
            }
            $scope.all = $scope.savings.concat($scope.housing, $scope.utilities, $scope.food, $scope.transportation, $scope.clothing, $scope.medical, $scope.personal, $scope.recreation, $scope.other);
            //console.log($scope.all);
            $scope.savingsTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.savings.length; i++) {
                    total += $scope.savings[i].total;
                } return total;
            };
            $scope.housingTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.housing.length; i++) {
                    total += $scope.housing[i].total;
                } return total;
            };
            $scope.foodTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.food.length; i++) {
                    total += $scope.food[i].total;
                } return total;
            };
            $scope.transportationTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.transportation.length; i++) {
                    total += $scope.transportation[i].total;
                } return total;
            };
            $scope.clothingTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.clothing.length; i++) {
                    total += $scope.clothing[i].total;
                } return total;
            };
            $scope.medicalTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.medical.length; i++) {
                    total += $scope.medical[i].total;
                } return total;
            };
            $scope.personalTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.personal.length; i++) {
                    total += $scope.personal[i].total;
                } return total;
            };
            $scope.recreationTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.recreation.length; i++) {
                    total += $scope.recreation[i].total;
                } return total;
            };
            $scope.otherTotal = function(){
                var total = 0;
                for (var i=0; i < $scope.other.length; i++) {
                    total += $scope.other[i].total;
                } return total;
            };
            $scope.savingsActual = function(){
                var total = 0;
                for (var i=0; i < $scope.savings.length; i++) {
                    total += $scope.savings[i].actual;
                } return total;
            };
            $scope.housingActual = function(){
                var total = 0;
                for (var i=0; i < $scope.housing.length; i++) {
                    total += $scope.housing[i].actual;
                } return total;
            };
            $scope.foodActual = function(){
                var total = 0;
                for (var i=0; i < $scope.food.length; i++) {
                    total += $scope.food[i].actual;
                } return total;
            };
            $scope.transportationActual = function(){
                var total = 0;
                for (var i=0; i < $scope.transportation.length; i++) {
                    total += $scope.transportation[i].actual;
                } return total;
            };
            $scope.clothingActual = function(){
                var total = 0;
                for (var i=0; i < $scope.clothing.length; i++) {
                    total += $scope.clothing[i].actual;
                } return total;
            };
            $scope.medicalActual = function(){
                var total = 0;
                for (var i=0; i < $scope.medical.length; i++) {
                    total += $scope.medical[i].actual;
                } return total;
            };
            $scope.personalActual = function(){
                var total = 0;
                for (var i=0; i < $scope.personal.length; i++) {
                    total += $scope.personal[i].actual;
                } return total;
            };
            $scope.recreationActual = function(){
                var total = 0;
                for (var i=0; i < $scope.recreation.length; i++) {
                    total += $scope.recreation[i].actual;
                } return total;
            };
            $scope.otherActual = function(){
                var total = 0;
                for (var i=0; i < $scope.other.length; i++) {
                    total += $scope.other[i].actual;
                } return total;
            };
            $scope.overallTotal = function(){
                var total = 0;
                for(var i=0; i < $scope.all.length; i++) {
                    total += $scope.all[i].total;
                } return total;
            };
            $scope.overallActual = function(){
                var total = 0;
                for(var i=0; i < $scope.all.length; i++) {
                    total += $scope.all[i].actual;
                } return total;
            };
            $scope.incomeTotal = function(){
                var total = 0;
                for(var i=0; i < $scope.income.length; i++) {
                    total += $scope.income[i].total;
                } return total;
            };
            $scope.incomeActual = function(){
                var total = 0;
                for(var i=0; i < $scope.income.length; i++) {
                    total += $scope.income[i].actual;
                } return total;
            };
            $scope.utilitiesTotal = function(){
                var total = 0;
                for(var i=0; i < $scope.utilities.length; i++) {
                    total += $scope.utilities[i].total;
                } return total;
            };
            $scope.utilitiesActual = function(){
                var total = 0;
                for(var i=0; i < $scope.utilities.length; i++) {
                    total += $scope.utilities[i].actual;
                } return total;
            };
            $scope.overallRemaining = ($scope.overallTotal() - $scope.overallActual());


        //    $scope.savingsPercent = function(){
        //        $scope.overall
        //    }
        });
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
        $scope.other = [];
        $scope.savings = [];
        $scope.housing = [];
        $scope.food = [];
        $scope.transportation = [];
        $scope.clothing = [];
        $scope.medical = [];
        $scope.personal = [];
        $scope.recreation = [];
        $scope.all = [];
        $scope.income = [];
        getCategories();
    };

    $scope.delete = function(cat) {
        if(confirm('PLEASE CONFIRM TO DELETE THE ' + cat.item + ' CATEGORY.'))
        $http.delete(
            '/data/remove/' + cat._id,
            cat
        );
        $scope.other = [];
        $scope.savings = [];
        $scope.housing = [];
        $scope.utilities = [];
        $scope.food = [];
        $scope.transportation = [];
        $scope.clothing = [];
        $scope.medical = [];
        $scope.personal = [];
        $scope.recreation = [];
        $scope.all = [];
        $scope.income = [];
        getCategories();
    };
//testing for git and heroku2
}]);