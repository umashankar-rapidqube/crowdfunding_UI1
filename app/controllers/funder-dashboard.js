import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    Ratings: [
        validator('presence', true),
        validator('format', {
             regex:/^[0-5][1-5]*$/,
        }),
        validator('length',{
            max : 1,
        })
    ],
});

export default Ember.Controller.extend(Validations,{
    showFeedback: false,

    actions: {
        provideFeedback: function() {
            this.toggleProperty('showFeedback');
        },

        submitFeedback: function() {
             var Ratings = this.get('Ratings');
                 console.log("Ratings"+Ratings);
             var Comments =this.get('Comments');
             console.log("Comments"+Comments);
            if (Ratings === null || Ratings === undefined || Ratings === "") {
                this.set('Ratingserrormessage', "field cannot be empty")
                return;
            }

           /* let {
                Ratings
            } = this.getProperties('Ratings');*/
                
           var dataString = {
                "Ratings": Ratings,
            };
             console.log("dataString"+dataString);
            //console.log(CONFIG.GOURL);
            //alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
            //this.set('loading_image_visibility', "show");
            var mycontroller = this;
            //var uid;
            var message;
           // console.log("Registration Input: " + JSON.stringify(dataString));
           /* return $.ajax({
            url: 'http://localhost:8082/funder_dashboard/rating',
            type: 'POST',
            accepts: 'application/json',
            data: dataString,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   //message=response.message.message;
                   console.log(response.message);
                 
                   //mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModal');
                   //mycontroller.set('loading_image_visibility', "hide");
                   //mycontroller.transitionToRoute('home');              
                 
           },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });*/
            this.toggleProperty('showFeedback');
        }
    }
});