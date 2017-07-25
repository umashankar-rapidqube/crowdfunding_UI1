import Ember from 'ember';

export default Ember.Route.extend({
      model() {
        var data=[ {
            "campaignname": "Seed Funding",  "pledgeamount": "10000/-", "receivedamount": "10000/-","fundsreceived": "100%", "status": "Received",
        }
        , {
           "campaignname": "Hamari Ganga",  "pledgeamount": "15000/-", "receivedamount": "0","fundsreceived": "66.67%", "status": "Pending"
        }
        , {
            "campaignname": "Plant Tree",  "pledgeamount": "20000/-", "receivedamount": "20000/-","fundsreceived": "70%","status": "Not Received"
        }
        ];
       
        var datastring;
           //var token = sessionStorage.getItem('token');
           //console.log("token"+token);
            $.ajax({
                    url: 'http://localhost:8082/report',
                    type: 'GET',
                    accepts: 'application/json',
                    //Authorization: token,
                    
                   success: function(datastring) {
                        //alert("success"+JSON.stringify(data))
                        console.log(JSON.stringify(datastring))
                      
                        return datastring,
                        console.log('DEBUG: GET Enquiries OK');
                    },
                    error: function(err) {
                        console.log(datastring);
                        console.log('err')
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });

 return data;


    }
});
