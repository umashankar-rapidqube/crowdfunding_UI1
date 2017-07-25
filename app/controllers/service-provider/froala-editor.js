import Ember from 'ember';

export default Ember.Controller.extend({
  
actions:{
    toggleModal : function(){

        var myProperty=this.set('myProperty');
        console.log("myProperty"+myProperty);

        var datastring={
            'myProperty':myProperty
        }
         var mycontroller = this;
       return $.ajax({
            url: 'http://localhost:8082/service-provider/froala-editor',
            type: 'POST',
            accepts: 'application/json',
            data: datastring,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   //message=response.message.message;
                     console.log(response.message);
                   //mycontroller.set('uid',uid);
                  // mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                  mycontroller.toggleProperty('isShowingModal');
                  // mycontroller.set('loading_image_visibility', "hide");
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
                   //console.log('');
            }
           }) 
    },

    submit: function(){
        window.location.reload(true);
    }
}
            
});