angular
.module('tea')
.controller('HomeController',function($scope){
})
.controller('CreateController', function($scope, NewTeaPost){
  $scope.teas =undefined;

$scope.createTea = function(tea){
  NewTeaPost.postTea(tea)
  .then(function(data){
    console.log(data);
  });
}
})

.controller('PostController', function($scope,NewTeaPost){
  NewTeaPost.getTea().then(function(teas){
    console.log(teas);
    $scope.teas = teas.data;
    console.log($scope.teas);
  });
$scope.deleteTea = function(tea){
  NewTeaPost.deleteTeas(tea._id).then(function(teas){
    console.log(teas);
    $scope.teas = teas.data;
    console.log($scope.teas);
  });
}
})
