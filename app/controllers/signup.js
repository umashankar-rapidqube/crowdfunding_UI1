import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    name: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-. ]+$/
        })
    ],

    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],

    phonenumber: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],

    password: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 10
      }),
      validator('format', {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
        message: '{description} must include at least one upper case letter, one lower case letter, and a number'
      }),
      validator('length', {
        isWarning: true,
        min: 6,
        message: 'What kind of weak password is that?'
      })
    ],

    confirmpassword :[
         validator('confirmation', {
    on: 'password',
    message: 'password do not match'
  })
],

   documentdetail: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-1-9-0/-/. ]+$/,
            message: ''
        })
    ], 
});

var ValidationsOrg = buildValidations({
    
    Organisationname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-1-9-0/-/. ]+$/,
            message: ''
        })
    ],

    emailid: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],

    phonenumbers: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],

    panno: [
        validator('presence', true),
        validator('format', {
            regex: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
            message: 'invalid pan card number' 
        })
    ],

    passwords: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 10
      }),
      validator('format', {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
        message: '{description} must include at least one upper case letter, one lower case letter, and a number'
      }),
      validator('length', {
        isWarning: true,
        min: 6,
        message: 'What kind of weak password is that?'
      })
    ],

    confirmpasswords:[
         validator('confirmation', {
    on: 'passwords',
    message: 'password do not match'
  })
],

    
    fullname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/./_/ ]+$/,
            message: ''
        })
    ],

    enterdesignation: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/./_/ ]+$/,
            message: ''
        })
    ],

    email2: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],

    phoneno: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/
        })
    ],
});

export default Ember.Controller.extend(Validations, ValidationsOrg, {
    isIndividualAuthorize: false,
    isOrganisationAuthorize: false,
    isShowingModal: false,
    organisationtype: ['NGO / Nonprofit', 'Social Enterprise', 'Community Organization', 'Corporate', 'Startup', 'Others', ],
    documenttype: ['Passport', 'PAN No', 'Aadhar No',],
    actions: {
        registerindividual: function(record) {
            this.set('isIndividualAuthorize', true);
            this.set('isOrganisationAuthorize', false);
        },

        registerorganisation: function(record){
            this.set('isOrganisationAuthorize', true);
            this.set('isIndividualAuthorize', false);
        },

        toggleModal: function() {
            
            var name = this.get('name');
            var email = this.get('email');
            var phonenumber = this.get('phonenumber');
            var password = this.get('password');
            var confirmpassword = this.get('confirmpassword');
            var chosen = this.get('selectedtypes');
            var documentdetail = this.get('documentdetail');

            if (name === null || name === undefined || name === ""){
                this.set('nameerror', "field cannot be empty")
                //return;
            } if (email === null || email === undefined || email === "") {
                this.set('emailerror', "field cannot be empty")
                //return;
            } if (phonenumber === null || phonenumber === undefined || phonenumber === "") {
                this.set('phonenumbererror', "field cannot be empty")
                //return;
            } if (password === null || password === undefined || password === "") {
                this.set('passworderror', "field cannot be empty")
                //return;
            } if (confirmpassword === null || confirmpassword === undefined || confirmpassword === "") {
                this.set('confirmpassworderror', "field cannot be empty")
                //return;
            } if (chosen === null || chosen === undefined) {
                this.set('documenttypeerror', "field cannot be empty")
                //return;
            } if (documentdetail === null || documentdetail === undefined || documentdetail === "") {
                this.set('documentdetailerror', "field cannot be empty")
                //return;
            }
             if ((name === null || name === undefined || name === "") || 
                (email === null || email === undefined || email === "") || 
                (phonenumber === null || phonenumber === undefined || phonenumber === "") ||
                (password === null || password === undefined || password === "") ||
                (confirmpassword === null || confirmpassword === undefined || confirmpassword === "") ||
                (chosen === null || chosen === undefined) ||
                (documentdetail === null || documentdetail === undefined || documentdetail === ""))
                {
                  this.toggleProperty('isShowingModals');  
                }
                else{
                     let {
                name,
                email,
                phonenumber,
                password,
                selectedtypes,
                documentdetail,
                facebook,
                blog,
                websiteurl,
                youtube
            } = this.getProperties('name', 'email', 'phonenumber', 'password','selectedtypes','documentdetail','facebook','blog','websiteurl','youtube');

            var dataString = {
                "userType":"Individual",
                "name": name,
                "email": email,
                "phoneno": phonenumber,
                "password": password,
                "document":{"documenttype": selectedtypes,"documentvalue": documentdetail},
                "facebook":facebook,
                "blog":blog,
                "websiteurl":websiteurl,
                "youtube":youtube,
                "organisationname":"",
                "organisationemail":"",
                "organisationphoneno":"",
                "organisationtype":"",
                "designation":""
            };
            //console.log(CONFIG.GOURL);
            alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
           // this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            var message;
            console.log("Registration Input: " + JSON.stringify(dataString));
            return $.ajax({
            url: 'http://localhost:8082/crowdfunding/register',
            type: 'POST',
            accepts: 'application/json',
            data: dataString,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   message=response.message.message;
                     console.log(response.message);
                     mycontroller.set('uid',uid);
                    // mycontroller.set('message',message);
                  // mycontroller.toggleProperty('showRegResponse');
                     mycontroller.toggleProperty('isShowingModalsss');
                  // mycontroller.set('loading_image_visibility', "hide");
                 //  mycontroller.transitionToRoute('home');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
    
                }
        },


        toggleModal1: function() {
            var chosen = this.get('selectedtype');
            console.log(chosen);
            var Organisationname = this.get('Organisationname');
            var emailid = this.get('emailid');
            var phonenumbers = this.get('phonenumbers');
            var panno = this.get('panno');
            var passwords = this.get('passwords');
            var confirmpasswords = this.get('confirmpasswords');
            var fullname = this.get('fullname');
            var enterdesignation = this.get('enterdesignation');
            var email2 = this.get('email2');
            var phoneno = this.get('phoneno');

           /* if ((chosen === null || chosen === undefined) || 
                (Organisationname === null || Organisationname === undefined || Organisationname === "") || 
                (emailid === null || emailid === undefined || emailid === "") ||
                (fullname === null || fullname === undefined || fullname === "") ||
                (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") ||
                (email2 === null || email2 === undefined || email2 === "") ||
                (phoneno === null || phoneno === undefined || phoneno === "")) {
                this.set('errormessage1', "This field cannot be blank");
                this.set('errormessage2', "This field cannot be blank");
                this.set('errormessage3', "This field cannot be blank");
                this.set('errormessage4', "This field cannot be blank");
                this.set('errormessage5', "This field cannot be blank");
                this.set('errormessage6', "This field cannot be blank");
                this.set('errormessage7', "This field cannot be blank");
                this.toggleProperty('isShowingModals');
                return;
            }*/ 
            if (chosen === null || chosen === undefined){
                this.set('errormessage1', "Please Select Organisation");
                //this.toggleProperty('isShowingModals');
                //return;
            }
             if (Organisationname === null || Organisationname === undefined || Organisationname === "") {
                this.set('errormessage2', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (emailid === null || emailid === undefined || emailid === "") {
                this.set('errormessage3', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (phonenumbers === null || phonenumbers === undefined || phonenumbers === "") {
                this.set('phonenumberserror', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (panno === null || panno === undefined || panno === "") {
                this.set('pannoerror', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (passwords === null || passwords === undefined || passwords === "") {
                this.set('passwordserror', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (confirmpasswords === null || confirmpasswords === undefined || confirmpasswords === "") {
                this.set('confirmpasswordserror', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (fullname === null || fullname === undefined || fullname === "") {
                this.set('errormessage4', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") {
                this.set('errormessage5', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (email2 === null || email2 === undefined || email2 === "") {
                this.set('errormessage6', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (phoneno === null || phoneno === undefined || phoneno === "") {
                this.set('errormessage7', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }
            if ((chosen === null || chosen === undefined) || 
                (Organisationname === null || Organisationname === undefined || Organisationname === "") || 
                (emailid === null || emailid === undefined || emailid === "") ||
                (phonenumbers === null || phonenumbers === undefined || phonenumbers === "") ||
                (panno === null || panno === undefined || panno === "") ||
                (passwords === null || passwords === undefined || passwords === "") ||
                (confirmpasswords === null || confirmpasswords === undefined || confirmpasswords === "") ||
                (fullname === null || fullname === undefined || fullname === "") ||
                (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") ||
                (email2 === null || email2 === undefined || email2 === "") ||
                (phoneno === null || phoneno === undefined || phoneno === ""))
                {
                  this.toggleProperty('isShowingModals');  
                }
                else{
                        let {
                selectedtype,
                Organisationname,
                emailid,
                phonenumbers,
                panno,
                passwords,
                facebook,
                blog,
                websiteurl,
                youtube,
                fullname,
                enterdesignation,
                email2,
                phoneno
            } = this.getProperties('selectedtype', 'Organisationname', 'emailid', 'phonenumbers','panno','passwords','facebook','blog','websiteurl','youtube','fullname','enterdesignation','email2','phoneno');
                
            var dataString = {
                "userType":"Organisation",
                "organisation": {"organisationtype": selectedtype, "organisationvalue": Organisationname},
                "organisationemail": emailid,
                "organisationphoneno": phonenumbers,
                "documenttype":{"panno": panno},
                "password":passwords,
                "facebook":facebook,
                "blog":blog,
                "websiteurl":websiteurl,
                "youtube":youtube,
                "name":fullname,
                "designation":enterdesignation,
                "email2":email2,
                "phoneno":phoneno,
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
            url: 'http://localhost:8082/crowdfunding/register',
            type: 'POST',
            accepts: 'application/json',
            data: dataString,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   message=response.message.message;
                     console.log(response.message);
                   //mycontroller.set('uid',uid);
                   //mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModalss');
                   //mycontroller.set('loading_image_visibility', "hide");
                   //mycontroller.transitionToRoute('home');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });

                }
        },

        register: function() {
            console.log("Test");
        },

        focusOutInput: function() {
            alert("Hello");
            this.set('errormessage1', '');
        },

        login: function(){
               window.location.reload(true);
        },


        login1: function(){
               window.location.reload(true);
        }
       /* toggleModal1: function() {
            var chosen = this.get('selectedtype');
            console.log(chosen);

            var mycontroller = this;
            if (chosen === null || chosen === undefined) {
                this.set('errorMessage1', "Please Select Oragnisation");
                return false;
            } else {
                this.set('errorMessage1', "");
                this.set('chosenTest', chosen);
                this.toggleProperty('isShowingModal');
    }
        }*/
    }
});