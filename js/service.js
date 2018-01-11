app.service('SimpleService',function(){
    var vm=this;
    vm.getCustomers=getCustomers;
    
    vm.customers = [
        {
            name:'John Smith',
            city:'Pune'
        },
        {
            name:'John Doe',
            city:'Mumbai'
        },
        {
            name:'Jane Doe',
            city:'Hyderabad'
        }
    ];
    function getCustomers(){
        console.log("data from service");
        return vm.customers;
    }
});