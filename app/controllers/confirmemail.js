import Ember from 'ember';

import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    otp:[
        validator('presence', true),
        validator('format', {
            regex:/^[0-9]+$/,
            type: 'number'
        })
    ],
})

export default Ember.Controller.extend(Validations,{

   actions: {

       toggleModal:function(){
            var emailId = this.get('email');
            if (emailId === null || emailId === undefined || emailId === "") {
                this.set('errormessage', "Please fill in at least one field")
                return;
            }
         let {
                content
            } = this.getProperties('content');
                
           var dataString = {
                "content": content,
            };
            //console.log(CONFIG.GOURL);
            //alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
            //this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            var message;
            //console.log("Registration Input: " + JSON.stringify(dataString));
            return $.ajax({
            url: 'http://localhost:8082/confirmemail/mail',
            type: 'POST',
            accepts: 'application/json',
            data: dataString,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   //message=response.message.message;
                   console.log(response.message);
                   //mycontroller.set('uid',uid);
                   //mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModal');
                   //mycontroller.set('loading_image_visibility', "hide");
                   //mycontroller.transitionToRoute('home');              
                 
           },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
           
             this.toggleProperty('isShowingModal');
        },
        resetpassword:function(){
             let {
                content
            } = this.getProperties('content');
                
           var dataString = {
                "content": content,
            };
            //console.log(CONFIG.GOURL);
            //alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
            //this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            var message;
            console.log("Registration Input: " + JSON.stringify(dataString));
            return $.ajax({
            url: 'http://localhost:8082/confirmemail/otp',
            type: 'POST',
            accepts: 'application/json',
            data: dataString,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   //message=response.message.message;
                   console.log(response.message);
                   //mycontroller.set('uid',uid);
                   //mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModal');
                   //mycontroller.set('loading_image_visibility', "hide");
                   //mycontroller.transitionToRoute('home');     
                    mycontroller.transitionToRoute('reset-password');         
                 
           },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
             
           });
             
        }
    }
});