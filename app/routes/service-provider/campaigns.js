import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "campaignId": "1",
                "campaignName": "Help",
                "campaignType": "Save Water Campaign",
                "regStatus": true,
                "campStatus": false
            },
            {
                "campaignId": "2",
                "campaignName": "Promote",
                "campaignType": "Animal exploitation",
                "regStatus": false,
                "campStatus": false
            },
            {
                "campaignId": "3",
                "campaignName": "Partner",
                "campaignType": "Orphans Campaign",
                "regStatus": true,
                "campStatus": true
            }
        ];
        var datasting;
           //var token = sessionStorage.getItem('token');
           //console.log(token);
            $.ajax({
                    url: 'http://localhost:8082/service-provider/campaigns/',
                    type: 'GET',
                    accepts: 'application/json',
                    //Authorization: token,
                    
                    success: function(datasting) {
                        //alert("success"+JSON.stringify(data))
                        console.log(JSON.stringify(datasting)) 
                       
                        return datasting,
                        console.log('DEBUG: GET Enquiries OK');
                    },
                    error: function(err) {
                        console.log(datasting)
                        console.log('err')
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });

        return data;
    }
});