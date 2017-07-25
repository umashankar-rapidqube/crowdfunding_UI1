import Ember from 'ember';
var likecount =0;
var spamcount =0;
export default Ember.Controller.extend({
  // likecount:0,
    actions: {
        callRewards : function()
        {
            this.transitionToRoute('reward');
        },

        toggleModal : function()
        {
            var content = this.get('content');
            if (content === null || content === undefined || content === "") {
                this.set('errormessage', "you must have to enter some comments!!!!");
                return;
            }
            else{
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
            url: 'http://localhost:8082/campaign-detail',
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
            }
             
        },

        submit:function(){
           window.location.reload(true); 
        },

        aboutfundraiser : function(){
         //   this.transitionToRoute('home');

            var datastring;
            $.ajax({
                url:"http://localhost:8082/campaign-detail/aboutfunder",
                type: 'GET',
                contentType: 'application/json;charset=utf-8',
            //Authorization: token,
        
                success: function(datastring) {
                    //alert("success"+JSON.stringify(data))
                            console.log("1233");
                    console.log("data"+JSON.stringify(datastring));
                        // alert("data"+JSON.stringify(data));
                    return datastring,
                        console.log('DEBUG: GET Enquiries OK');
                 },
                 error: function(err) {
                    console.log(datastring);
                    console.log("Error : " + JSON.stringify(err));
                    console.log('DEBUG: GET Enquiries Failed');
                    }
                 });

        },
    
        /* facebook: function() {
             window.location.replace("https://en-gb.facebook.com/login/");
        },
        twitter: function() {
             window.location.replace("https://twitter.com/login");
        },
        linkedin: function() {
             window.location.replace("https://in.linkedin.com/");
        },*/
        likebutton:function(){
             console.log("in func");
             if(typeof(Storage) !== "undefined") {
             console.log("in if condn");
             if (localStorage.clickcount) {
             localStorage.clickcount = Number(localStorage.clickcount)+1;
             console.log("increment:"+localStorage.clickcount);
             } else {
             localStorage.clickcount = 1;
             console.log(localStorage.clickcount);
                    }
             }
                this.set("likecount",localStorage.clickcount);
                likecount=localStorage.clickcount;
                console.log('likecount'+likecount);
             },
        spambutton:function(){
                console.log("in func");
                if(typeof(Storage) !== "undefined") {
                        console.log("in if condn");
                         if (localStorage.click) {
                        localStorage.click = Number(localStorage.click)+1;
                        console.log("increment:"+localStorage.click);
                        } else {
                             localStorage.click = 1;
                             console.log(localStorage.click);
                             }
                    }
                this.set("spamcount",localStorage.click);
                spamcount=localStorage.click;
                console.log('spamcount'+spamcount);
        }
    }
});
