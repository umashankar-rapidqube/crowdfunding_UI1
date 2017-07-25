import Ember from 'ember';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    password: {
    description: 'Password',
    validators: [
      validator('presence', true),
      validator('length', {
      })
    ],
    }

});

var showStartCampaign = false;
export default Ember.Controller.extend(Validations,{
    
    actions: {
        register: function() {
            this.transitionToRoute('signup');
        },

        login: function() {
            var goToStartCampaign = sessionStorage.getItem('goToStartCampaign');
            var emailId = this.get('email');
            var Password = this.get('password');
            console.log(emailId);
            /*let {
                email,
                password
            } = this.getProperties('email', 'password');
               console.log(email);
               console.log(password);
               var dataString = {
                "email": email,
                "password": password,
            };
                 var mycontroller = this;
                console.log(email);
                return $.ajax({
                url:'http://localhost:8082/crowdfunding/login',
                type: 'POST',
                accepts: 'application/json',
                data: dataString,
                success: function(response) {
                    var message = response.message;
                    var error   = response.error;
                    console.log(message);
                    console.log(error);
                    //if ( message === "login successful") {
                      //  console.log(JSON.stringify(message));
                   // }
                        
                     mycontroller.transitionToRoute('home');

                },      
                    error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
            }
                
                });*/
                
            if (emailId === 'admin@a.com' || emailId === 'Admin@a.com' || emailId === 'ADMIN@A.COM') {
                sessionStorage.setItem('userType', "Admin");
                sessionStorage.setItem('showAdminHeaderModules', false);
            } else if (emailId === 'fundraiser@f.com' || emailId === 'Fundraiser@f.com' || emailId === 'FUNDRAISER@F.COM') {
                showStartCampaign = true;
                sessionStorage.setItem('userType', "Fundraiser");
                sessionStorage.setItem('showAdminHeaderModules', true);
                sessionStorage.setItem('showStartCampaign', true);                
            } else if (emailId === 'funder@f.com' || emailId === 'Funder@f.com' || emailId === 'FUNDER@F.COM' || emailId === 'xyz@c.com') {
                sessionStorage.setItem('userType', "Funder");
                sessionStorage.setItem('showAdminHeaderModules', true);
                sessionStorage.setItem('showFunderModules', true);
                sessionStorage.setItem('showStartCampaign', false);
            } else if (emailId === 'customer@c.com' || emailId === 'Customer@c.com' || emailId === 'CUSTOMER@C.COM') {
                sessionStorage.setItem('userType', "Customer");
                sessionStorage.setItem('showAdminHeaderModules', false);
            } 
            else {
                       this.set('errormessage', "Invalid EmailId");
                       return;
                    }
            
            if (goToStartCampaign) {
                if (showStartCampaign)
                    this.transitionToRoute('start-campaign');
                else
                    sessionStorage.clear();
                    this.set('showValidation', true);

            }else {
                window.location.reload(true);
            }
        },

        dismissModal: function() {
            this.set('showValidation', false);
        },
        reset:function(){
            alert("hello");
        }
    },
});