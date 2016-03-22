angular
.module('tea',[
  'ngRoute',
'app.controllers'
])
.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/', {
    templateUrl:'views/post.html',
    controller: 'PostController',
  }).otherwise({

    redirectTo: '/'
  });

}]);