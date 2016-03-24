angular
.module('tea')
.service('NewTeaPost', function($http){

  function postTea(tea){
  return $http.post('http://tiny-tiny.herokuapp.com/collections/tea', tea)
}
  function getTea(tea){
  return $http.get('http://tiny-tiny.herokuapp.com/collections/tea')
}
  function deleteTea(tea){
  return $http.delete('http://tiny-tiny.herokuapp.com/collections/tea' + id)
}
    return{
      postTea:postTea,
      getTea:getTea,
      deleteTea:deleteTea
    }
});
