import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "participantId": "1",
                "participantType": "Funder",
                "participantName": "Sweta Vahia",
                "regStatus": false
            },
            {
                "participantId": "2",
                "participantType": "Funder-Raiser",
                "participantName": "Rakesh Bharati",
                "regStatus": true
            },
            {
                "participantId": "3",
                "participantType": "Customer",
                "participantName": "Shraddha Kharat",
                "regStatus": false
            }
        ];

        var datastring;
           //var token = sessionStorage.getItem('token');
           //console.log("token"+token);
            $.ajax({
                    url: 'http://localhost:8082/service-provider/participants',
                    type: 'GET',
                    accepts: 'application/json',
                    //Authorization: token,
                    
                   success: function(datastring) {
                        //alert("success"+JSON.stringify(data))
                        console.log(JSON.stringify(datastring));
                      
                        return datastring,
                        console.log('DEBUG: GET Enquiries OK');
                    },
                    error: function(err) {
                        console.log(datastring);
                        console.log('err');
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });



        return data;
    }
});