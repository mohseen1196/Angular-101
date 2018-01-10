var app=angular.module("DemoApp",[]);

app.controller('SimpleController',function($scope,SimpleService){
    
    $scope.customers = SimpleService.getCustomers();
    //     {
    //         name:'John Smith',
    //         city:'Pune'
    //     },
    //     {
    //         name:'John Doe',
    //         city:'Mumbai'
    //     },
    //     {
    //         name:'Jane Doe',
    //         city:'Hyderabad'
    //     }
    // ];
    
    // $http({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/users'
    //   })
    //   .then(function successCallback(response) {
    //       $scope.customers=response.data;
    //     }, function errorCallback(error) {
    //       alert("Error Occured!!");
    // });
});