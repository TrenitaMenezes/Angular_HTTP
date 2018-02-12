(function() {
    var app = angular.module("contactApp");
    app.service("ContactDataService", function($http) {
       var self = this;
        //GET using promise
       self.getContacts = function() {
           var promise1 = $http.get("http://localhost:3000/contacts/");
           var promise2 = promise1.then(function(response) {
               return response.data;
           });
           return promise2;
       }

       //PUT using promise
       self.saveUserInputs = function(userData) {
         return $http.put("http://localhost:3000/contacts/"+userData.id,userData)
                .then(function(response) {
               console.log(response);
           })
       }

       //POST using promise
       self.addNewContact = function(userData) {
           return $http.post("http://localhost:3000/contacts/",userData)
               .then(function(response) {
               console.log(response);
           })
       }

       //DELETE using promise
       self.deleteContact = function(userData) {
           $http.delete("http://localhost:3000/contacts/"+userData.id)
           .then(function(response) {
                 console.log(response);
                 })
       }
    });
})();
