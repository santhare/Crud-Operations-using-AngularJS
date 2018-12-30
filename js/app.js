var CrudOperations = angular.module('CrudOperations',[]);
CrudOperations.controller('CrudController',function($scope){
console.log("In my controller..");

$scope.newUser={};
$scope.editUser={};
$scope.message="";

$scope.users= [

    {Firstname:"jyothi",Lastname:"mittu",Email:"jyothi@gmail.com",Phone:"7894356467",Age:"25"},
    {Firstname:"rewa",Lastname:"kumari",Email:"kumari@gmail.com",Phone:"7778998897",Age:"28"},
    {Firstname:"jyothi",Lastname:"mittu",Email:"jyothi@gmail.com",Phone:"7908356467",Age:"24"}
];

$scope.saveUser=function(){
    
    $scope.users.push($scope.newUser);
    $scope.newUser={};
    $scope.message="new user added successfully!";
};
$scope.selectUser=function(user){
  
    $scope.editUser= user;
};

$scope.updateUser=function(){
    $scope.message="user updated successfully";

};
$scope.deleteUser=function(){
    $scope.users.splice($scope.users.indexOf($scope.editUser),1);
    $scope.message="user deleted successfully";
};
$scope.clearMessage=function(){
    $scope.message="";  
};

});