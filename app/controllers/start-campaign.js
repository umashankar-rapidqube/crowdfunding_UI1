/*import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    campaigntitle: [
        validator('presence', true),
        validator('length', {
            max: 80,
        })
    ],

     shortdescription: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    campaigncategory: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    goalamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    startproject: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9/.]+$/,
            type: 'number'
        })
    ],

     rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],


/*    rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],
});

export default Ember.Controller.extend(Validations,{
    showStartResponse: false,
    isAddReward: false,
    isSaveReward: false,
    CampaignCategory: ['Education', 'Children', 'Animal Welfare','Environment','Film','Dance',],
    actions: {
    type: 'file',
    upload: function(e) {
    /*const reader = new FileReader();
    const file = event.target.files[0];
    let imageData;

    // Note: reading file is async
    reader.onload = () => {
      imageData = reader.result;
      this.set('data.image', imageData);
      // additional logics as you wish
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    var inputFiles = e.target.files;
    var imgFile = inputFiles[0];
    var formData = new FormData();
    formData.append('photo', imgFile);
    Ember.$.ajax({
      type: 'POST',
      url: 'http://localhost:8082/start-campaign/img',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.error(err)
      }
    })
  },

  videoupload: function(e) {
   /* const reader = new FileReader();
    const file = event.target.files[0];
    let videoData;

    // Note: reading file is async
    reader.onload = () => {
      videoData = reader.result;
      this.set('data.video', videoData)

      // additional logics as you wish
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    var inputFiles = e.target.files;
    var videoFile = inputFiles[1];
    var formData = new FormData();
    formData.append('video', videoFile);
    Ember.$.ajax({
      type: 'POST',
      url: 'http://localhost:8082/start-campaign/video',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.error(err);
      }
    })
  },

        start: function(){
            this.set('showStartResponse', true);    
        },
        
        regOK: function() {
            var mycontroller = this;
            mycontroller.set('showRegResponse', false);
            mycontroller.transitionToRoute('fund-raiser');
        },

        dismissModal: function() {
            this.set('showStartResponse', false);
        },

        createCampaign: function() {
        },

        addRewards: function() {
           this.transitionToRoute('addrewards');
        },

        saveRewards: function() {
            var rewardtitle = this.get('rewardtitle');
            var rewardamount = this.get('rewardamount');
            var rewarddescription = this.get('rewarddescription');
            //var deliveryDate = this.get('deliveryDate');
            
            if (rewardtitle === null || rewardtitle === undefined || rewardtitle === "") {
                this.set('rewardtitleerrormessage', "field cannot be empty")
                //return;
            }

            if (rewardamount === null || rewardamount === undefined || rewardamount === "") {
                this.set('rewardamounterrormessage', "field cannot be empty")
                //return;
            }

            if (rewarddescription === null || rewarddescription === undefined || rewarddescription === "") {
                this.set('rewarddescriptionerrormessage', "field cannot be empty")
                return;
            }
           /*  let {
               rewardtitle,
               rewardamount,
               rewarddescription,
               
             } = this.getProperties('rewardtitle','rewardamount','rewarddescription');*/
            
            
                

            /*if (deliveryDate === null || deliveryDate === undefined || deliveryDate === "") {
                this.set('dateerrormessage', "Date field cannot be empty")
                return;
            }*/
          /*  this.set('isAddReward', false);
            this.toggleProperty('isSaveReward');
           
            },
            toggleModal1: function() {
            var campaigntitle = this.get('campaigntitle');
            var chosen = this.get('selectedtypes');
            var content = this.get('content');
            var contents = this.get('contents');
            var goalamount = this.get('goalamount');
            var startdeliverydate = this.get('startdeliverydate');
            var startproject = this.get('startproject');
            var enddeliverydate = this.get('enddeliverydate');

            
        
            if (campaigntitle === null || campaigntitle === undefined || campaigntitle === "") {
                this.set('errormessage1', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
            if (chosen === null || chosen === undefined) {
                this.set('errormessage3', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }

            if (content === null || content === undefined || content === "") {
                this.set('errormessage2', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
            
            if (contents === null || contents === undefined || contents === "") {
                this.set('errormessage4', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (goalamount === null || goalamount === undefined || goalamount === "") {
                this.set('errormessage5', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (startdeliverydate === null || startdeliverydate === undefined || startdeliverydate === "") {
                this.set('startdateerrormessage', "Date field cannot be empty")
                //return;
            }
            if (startproject === null || startproject === undefined || startproject === "") {
                this.set('startprojecterror', "field cannot be empty")
                //return;
            }
            if (enddeliverydate === null || enddeliverydate === undefined || enddeliverydate === "") {
                this.set('enddateerrormessage', "Date field cannot be empty")
                //return;
            }
            if ((campaigntitle === null || campaigntitle === undefined || campaigntitle === "") ||                 
                (chosen === null || chosen === undefined) ||
                (content === null || content === undefined || content === "") ||
                (contents === null || contents === undefined || contents === "")  ||
                (goalamount === null || goalamount === undefined || goalamount === "") ||
                (startdeliverydate === null || startdeliverydate === undefined || startdeliverydate === "") ||
                (startproject === null || startproject === undefined || startproject === "") ||
                (enddeliverydate === null || enddeliverydate === undefined || enddeliverydate === "")){
                    this.toggleProperty('isShowingModal');
                }
            else{

                    let {
               campaigntitle,
               selectedtypes,
               content,
               contents,
               goalamount,
               startdeliverydate,
               startproject,
               enddeliverydate,
               rewardtitle,
               rewardamount,
               rewarddescription
             } = this.getProperties('campaigntitle','selectedtypes','content','contents','goalamount','startdeliverydate','startproject','enddeliverydate','rewardtitle','rewardamount','rewarddescription');
            
             var datastring={
                
                 "campaigntitle": campaigntitle,
                 "campaigncategory":selectedtypes,
                 "campaigndescription":content,
                 "campaignstory":contents,
                 "goalamount":goalamount,
                 "startcampaigndate":startdeliverydate,
                 "startprojectamount":startproject,
                 "endcampaigndate":enddeliverydate,
                 "reward":[
                     {
                        "reward1": 
                    {
                        "rewardtitle":rewardtitle,
                        "rewardamount":rewardamount,
                        "rewarddescription":rewarddescription
                    }
                }
                 ]  
             };

           
                // console.log(CONFIG.GOURL);
            //alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
            //this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            var message;
            var mydata ;
            //console.log(mydata);
            return $.ajax({
            url: 'http://localhost:8082/crowdfunding/createcampaign',

            type: 'POST',
            accepts: 'application/json',
            data: datastring,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   message=response.message.message;
                     console.log(response.message);
                   //mycontroller.set('uid',uid);
                  // mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModalss');
                  // mycontroller.set('loading_image_visibility', "hide");
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
                   //console.log('');
            }
           });
                }
         },

         home:function(){
             this.transitionToRoute('home');
             window.location.reload(true);
         },
         /* home2:function(){
              window.location.reload(true);
         }*/
   /*  }
    
     ,deliveryDate: Ember.computed(function () {
        let date = new Date();
        date.setDate(date.getDate() + 2);
        return date;
    })
});
*/
//new code for temporary changees


import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    campaigntitle: [
        validator('presence', true),
        validator('length', {
            max: 80,
        })
    ],

     shortdescription: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    campaigncategory: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    goalamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    startproject: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9/.]+$/,
            type: 'number'
        })
    ],

     rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],


    rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],
});

export default Ember.Controller.extend(Validations,{
    showStartResponse: false,
    isAddReward: false,
    isSaveReward: false,
    CampaignCategory: ['Education', 'Children', 'Animal Welfare','Environment','Film','Dance',],
    actions: {
    type: 'file',
    upload: function(e) {
    /*const reader = new FileReader();
    const file = event.target.files[0];
    let imageData;

    // Note: reading file is async
    reader.onload = () => {
      imageData = reader.result;
      this.set('data.image', imageData);
      // additional logics as you wish
    };

    if (file) {
      reader.readAsDataURL(file);
    }*/
    var inputFiles = e.target.files;
    var imgFile = inputFiles[0];
    var formData = new FormData();
    formData.append('photo', imgFile);
    Ember.$.ajax({
      type: 'POST',
      url: 'http://localhost:8082/start-campaign/img',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.error(err)
      }
    })
  },

  videoupload: function(e) {
   /* const reader = new FileReader();
    const file = event.target.files[0];
    let videoData;

    // Note: reading file is async
    reader.onload = () => {
      videoData = reader.result;
      this.set('data.video', videoData)

      // additional logics as you wish
    };

    if (file) {
      reader.readAsDataURL(file);
    }*/
    var inputFiles = e.target.files;
    var videoFile = inputFiles[1];
    var formData = new FormData();
    formData.append('video', videoFile);
    Ember.$.ajax({
      type: 'POST',
      url: 'http://localhost:8082/start-campaign/video',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.error(err)
      }
    })
  },

        start: function(){
            this.set('showStartResponse', true);    
        },
        
        regOK: function() {
            var mycontroller = this;
            mycontroller.set('showRegResponse', false);
            mycontroller.transitionToRoute('fund-raiser');
        },

        dismissModal: function() {
            this.set('showStartResponse', false);
        },

        createCampaign: function() {
        },

        addRewards: function() {
           this.transitionToRoute('addrewards');
        },

        saveRewards: function() {
            var rewardtitle = this.get('rewardtitle');
            var rewardamount = this.get('rewardamount');
            var rewarddescription = this.get('rewarddescription');
            //var deliveryDate = this.get('deliveryDate');
            
            if (rewardtitle === null || rewardtitle === undefined || rewardtitle === "") {
                this.set('rewardtitleerrormessage', "field cannot be empty")
                //return;
            }

            if (rewardamount === null || rewardamount === undefined || rewardamount === "") {
                this.set('rewardamounterrormessage', "field cannot be empty")
                //return;
            }

            if (rewarddescription === null || rewarddescription === undefined || rewarddescription === "") {
                this.set('rewarddescriptionerrormessage', "field cannot be empty")
                return;
            }
           /*  let {
               rewardtitle,
               rewardamount,
               rewarddescription,
               
             } = this.getProperties('rewardtitle','rewardamount','rewarddescription');*/
            
            
                

            /*if (deliveryDate === null || deliveryDate === undefined || deliveryDate === "") {
                this.set('dateerrormessage', "Date field cannot be empty")
                return;
            }*/
            this.set('isAddReward', false);
            this.toggleProperty('isSaveReward');
           
            },
            toggleModal1: function(e) {
                var test = e;
                console.log(test);
            var campaigntitle = this.get('campaigntitle');
            var chosen = this.get('selectedtypes');
            var content = this.get('content');
            var contents = this.get('contents');
            var goalamount = this.get('goalamount');
            var startdeliverydate = this.get('startdeliverydate');
            var startproject = this.get('startproject');
            var enddeliverydate = this.get('enddeliverydate');

            
        
            if (campaigntitle === null || campaigntitle === undefined || campaigntitle === "") {
                this.set('errormessage1', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
            if (chosen === null || chosen === undefined) {
                this.set('errormessage3', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }

            if (content === null || content === undefined || content === "") {
                this.set('errormessage2', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
            
            if (contents === null || contents === undefined || contents === "") {
                this.set('errormessage4', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (goalamount === null || goalamount === undefined || goalamount === "") {
                this.set('errormessage5', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (startdeliverydate === null || startdeliverydate === undefined || startdeliverydate === "") {
                this.set('startdateerrormessage', "Date field cannot be empty")
                //return;
            }
            if (startproject === null || startproject === undefined || startproject === "") {
                this.set('startprojecterror', "field cannot be empty")
                //return;
            }
            if (enddeliverydate === null || enddeliverydate === undefined || enddeliverydate === "") {
                this.set('enddateerrormessage', "Date field cannot be empty")
                //return;
            }
            if ((campaigntitle === null || campaigntitle === undefined || campaigntitle === "") ||                 
                (chosen === null || chosen === undefined) ||
                (content === null || content === undefined || content === "") ||
                (contents === null || contents === undefined || contents === "")  ||
                (goalamount === null || goalamount === undefined || goalamount === "") ||
                (startdeliverydate === null || startdeliverydate === undefined || startdeliverydate === "") ||
                (startproject === null || startproject === undefined || startproject === "") ||
                (enddeliverydate === null || enddeliverydate === undefined || enddeliverydate === "")){
                    this.toggleProperty('isShowingModal');
                }
            else{

                    let {
               campaigntitle,
               selectedtypes,
               content,
               contents,
               img,
               goalamount,
               startdeliverydate,
               startproject,
               enddeliverydate,
               rewardtitle,
               rewardamount,
               rewarddescription
             } = this.getProperties('campaigntitle','selectedtypes','content','contents','goalamount','startdeliverydate','startproject','enddeliverydate','rewardtitle','rewardamount','rewarddescription');
            
          //  var startdeliverydate =this.get('startdeliverydate');
            console.log(JSON.stringify(startdeliverydate));
               // var inputFiles = [];
             var  inputFiles = e.target.files;
             var imgFile = inputFiles;
             var formData = new FormData();
             formData.append('photo', imgFile);

             console.log(JSON.stringify(formData));

            var inputFiles = e.target.files;
            var videoFile = inputFiles;
            var myformData = new FormData();
            myformData.append('video', videoFile);
             

             var datastring={
                 "campaign_title":campaigntitle,
            "campaign_category":selectedtypes,
            "campaign_story":content,
            "campaign_discription":content,
            "campaign_image":JSON.stringify(formData),
            "campaign_video":JSON.stringify(myformData),
            "goal_amt":goalamount,
            "project_start_date":JSON.stringify(startdeliverydate),
            "initial_amount":startproject,
            "campaign_end_date":JSON.stringify(enddeliverydate)

            }
                    console.log(JSON.stringify(datastring));
            
            var mycontroller = this;
            var uid;
            var message;
            var mydata ;
            //console.log(mydata);
            return $.ajax({
            url: "http://192.168.0.24:3010/createCampaign",

            type: 'POST',
            contentType:'application/json',
            data:JSON.stringify(datastring),
            success:function(response) {
                console.log("abc");
                   console.log(JSON.stringify(response));
                   message=response.message.message;
                     console.log(response.message);
                   //mycontroller.set('uid',uid);
                  // mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModalss');
                  // mycontroller.set('loading_image_visibility', "hide");
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
                   //console.log('');
            }
           });
                }
         },

         home:function(){
             this.transitionToRoute('home');
             window.location.reload(true);
         },
         /* home2:function(){
              window.location.reload(true);
         }*/
    }
    
     /*deliveryDate: Ember.computed(function () {
        let date = new Date();
        date.setDate(date.getDate() + 2);
        return date;
    })*/
});