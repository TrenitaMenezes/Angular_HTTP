(function () {
    var app = angular.module("contactApp");

    app.controller("ContactCtrl", ContactControllerfn);

    function ContactControllerfn(ContactDataService) {
        var self = this;
        self.editMode = false;
        self.addMode = false;

        ContactDataService.getContacts().then(function (data) {
            self.contactList = data;
        });

        this.selectedContactFn = function (index) {
            this.selectedContact = this.contactList[index];
            self.successMessage = undefined;
            self.errorMessage = undefined;
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.saveUserInput = function () {
            this.editMode = !this.editMode;
            var userData = this.selectedContact;
            if (self.addMode) {
                ContactDataService.addNewContact(userData).then(function() {
                        self.successMessage = "Contact Information saved.";
                    },
                    function () {
                        self.errorMessage = "Something went wrong. Please try again";
                    });
                self.addMode = false;
            } else {
                ContactDataService.saveUserInputs(userData).then(function() {
                        self.successMessage = "Data succesfully updated.";
                    },
                    function () {
                        self.errorMessage = "Something went wrong. Please try again";
                    });
            }
        }


        this.addContact = function () {
            self.addMode = true;
            this.selectedContact = {
                "id" : new Date().toDateString()
            };
            this.editMode = true;
        }

        this.deleteContact = function() {
            var userData = this.selectedContact;
            ContactDataService.deleteContact(userData).then(function() {
                self.successMessage = "Contact deleted Succesfuly.";
            }, function() {
                self.errorMessage = "Something went wrong. Please try again";
            });
        }
    }

})();
