import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [{
        "propertyName": "campaignname",
        "title": "Campaign Name",
        "filterPlaceholder": "Campaign Name",
    }, {
        "propertyName": "goalamount",
        "title": "Goal Amount",
        "filterPlaceholder": "Goal Amount"
    }, {
        "propertyName": "receivedamount",
        "title": "Received Amount",
        "filterPlaceholder": "Received Amount"
    }, {
        "propertyName": "fundsreceived",
        "title": "Fund Received (%)",
        "filterPlaceholder": "Fund Received (%)"
    }, {
        "propertyName": "status",
        "title": "Status",
        "filterPlaceholder": "Status"
    }, {
        "propertyName": "submit",
        "title": "Check Status",
         "filterPlaceholder": "Check Status",
        "template": "submit-button"
    } ],
      actions: {

        click: function(record) {
            
            console.log(record.campaignname);
            this.set('campaignname',record.campaignname);
              

               var data;
       /*  $.ajax({
         url:"http://localhost:8082/funder_dashboard",
         type: 'GET',
         contentType: 'application/json;charset=utf-8',
            //Authorization: token,
         
         success: function(data) {
                //alert("success"+JSON.stringify(data))
                   
                console.log("data"+JSON.stringify(data));
                   // alert("data"+JSON.stringify(data));
                return data,
                    console.log('DEBUG: GET Enquiries OK');
            },
         error: function(err) {
             console.log("rest call failed..!!")
                console.log(data);
                console.log("Error : " + JSON.stringify(err));
                console.log('DEBUG: GET Enquiries Failed');
            }
        });*/

        this.transitionToRoute('funder_dashboard');

        },
      }

});