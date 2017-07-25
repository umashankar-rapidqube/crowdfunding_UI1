import Ember from 'ember';

import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({

     newpassword: [
      validator('presence', true),
      validator('length', {
        min: 6,
        max: 12
      }),
      validator('format', {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
        message: '{description} must include at least one upper case letter, one lower case letter, and a number'
      }),
      validator('length', {
        isWarning: true,
        min: 6,
        message: 'What kind of weak password is that?'
      })
    ],
})

export default Ember.Controller.extend(Validations,{
    actions: {

        toggleModal:function(){
              this.toggleProperty('isShowingModal');
        },

        toggleModal1:function(){
             let {
                newpassword
            } = this.getProperties('newpassword');
                
            var dataString = {
                "newpassword": newpassword,
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
            url: 'http://localhost:8082/reset-password',
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
                   mycontroller.toggleProperty('isShowingModals');
                   //mycontroller.set('loading_image_visibility', "hide");
                   //mycontroller.transitionToRoute('home');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
              //this.toggleProperty('isShowingModals');
              
        },
        reset:function(){
            window.location.reload(true);
        }
    }
});
