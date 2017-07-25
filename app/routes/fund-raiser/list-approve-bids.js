import Ember from 'ember';
export default Ember.Route.extend({
        model() {
            var data = [{
                "campaignname": "Plant Tree",
                "fundername": "Nikhil Gupta (4 outof 5)",
                "amountneeded": "30000",
                "bid": "1000",
                "status": true
            }, {
                "campaignname": "Gift a dream camp",
                "fundername": "Risabh Sharma (3 outof 5)",
                "amountneeded": "50000",
                "bid": "6000",
                "status": false
            }, {
                "campaignname": "Help baby fight cancer",
                "fundername": "Arun Hossamani (2 outof 5)",
                "amountneeded": "150000",
                "bid": "60000",
                "status": false
            }];

        var datasting;
           //var token = sessionStorage.getItem('token');
           //console.log(token);
            $.ajax({
                    url: 'http://localhost:8082/fund-raiser/list-approve-bids',
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
    }

);