import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
            "campaignname": "Avarice - A short film",
            "fundername": "Lokesh Reddi",
            "pleageamount": "20000",
            "receivedamount": "80%",
            "rewards": "T-shirt",
            "status": "Fund Received"
        }, {
            "campaignname": "Spin Be Fit",
            "fundername": "Kavi",
            "pleageamount": "10000",
            "receivedamount": "70%",
            "rewards": "T-shirt",
            "status": "Initiate Campaign"
        }, {
            "campaignname": "The Rhinos Need Help",
            "fundername": "Mohanraj PB",
            "pleageamount": "50000",  
            "receivedamount": "90%",
            "rewards": "T-shirt",
            "status": "Reward Delivered"
        }];
        
        var datasting;
           //var token = sessionStorage.getItem('token');
           //console.log(token);
            $.ajax({
                    url: 'http://localhost:8082/fund-raiser/status-of-fund-transfer/',
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