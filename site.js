var armyRanks = [
    'Private',
    'Private First Class',
    'Specialist',
    'Corporal',
    'Sergeant',
    'Staff Sergeant',
    'Sergeant First Class',
    'First Sergeant',
    'Command Sergeant Major',
    'Sergeant Major of the Army',
    'Warrant Officer 1',
    'Warrant Officer 2',
    'Warrant Officer 3',
    'Warrant Officer 4',
    'Master Warrant Officer 5',
    '2nd Lieutenant',
    '1st Lieutenant',
    'Captain',
    'Major',
    'Lieutenant Colonel',
    'Colonel',
    'Brigadier General',
    'Major General',
    'Lieutenant General',
    'Army Chief of Staff',
    'General',
    'Master Sergeant',
    'Sergeant Major',
    'Not listed'
];

var airforceRanks = [
    'Airman Basic',
    'Airman',
    'Airman First Class',
    'Senior Airman',
    'Staff Sergeant',
    'Technical Sergeant',
    'First Sergeant, Master Sergeant',
    'First Sergeant, Senior Master Sergeant',
    'First Sergeant, Chief Master Sergeant',
    '2nd Lieutenant',
    '1st Lieutenant',
    'Captain',
    'Major',
    'Lieutenant Colonel',
    'Colonel',
    'Brigadier General',
    'Major General',
    'Lieutenant General',
    'Air Force Chief of Staff General',
    'General of the Air Force',
    'Not listed'
];

var marineRanks = [
    'Private',
    'Private First Class',
    'Lance Corporal',
    'Corporal',
    'Sergeant',
    'Staff Sergeant',
    'Gunnery Sergeant',
    'First Sergeant',
    'Sergeant Major',
    'Warrant Officer',
    'Chief Warrant Officer 2',
    'Chief Warrant Officer 3',
    'Chief Warrant Officer 4',
    'Chief Warrant Officer 5',
    '2nd Lieutenant',
    '1st Lieutenant',
    'Captain',
    'Major',
    'Lieutenant Colonel',
    'Colonel',
    'Brigadier General',
    'Major General',
    'Lieutenant General',
    'Commandant of the Marine Corps',
    'General',
    'Master Sergeant',
    'Master Gunnery Sergeant',
    'Special	Sergeant Major of the Marine Corps',
    'Not listed'
];

var navyRanks = [
    'Seaman Recruit',
    'Seaman Apprentice',
    'Seaman',
    'Petty Officer Third Class',
    'Petty Officer Second Class',
    'Petty Officer First Class',
    'Chief Petty Officer',
    'Senior Chief Petty Officer',
    'Master Chief Petty Officer',
    'Warrant Officer 1',
    'Warrant Officer 2',
    'Warrant Officer 3',
    'Warrant Officer 4',
    'Master Warrant Officer',
    'Ensign',
    'Lieutenant, Junior Grade',
    'Lieutenant',
    'Lieutenant Commander',
    'Commander',
    'Captain',
    'Rear Admiral (Commodore)',
    'Rear Admiral (Upper Half)',
    'Vice Admiral',
    'Chief of Naval Operations',
    'Commandant of the Coast Guard',
    'Admiral',
    'Special	Master Chief Petty Officer of the Navy',
    'Fleet Admiral',
    'Not listed'
];

var coastguardRanks = [
    'Seaman Recruit',
    'Seaman Apprentice',
    'Seaman',
    'Non-Commissioned Officers',
    'Petty Officer Third Class',
    'Petty Officer Second Class',
    'Petty Officer First Class',
    'Chief Petty Officer',
    'Senior Chief Petty Officer',
    'Master Chief Petty Officer',
    'Master Chief Petty Officer of the Navy',
    'Warrant Officer 1',
    'Warrant Officer 2',
    'Warrant Officer 3',
    'Warrant Officer 4',
    'Master Warrant Officer',
    'Ensign',
    'Lieutenant, Junior Grade',
    'Lieutenant',
    'Lieutenant Commander',
    'Commander',
    'Captain',
    'Rear Admiral (Commodore)',
    'Rear Admiral (Upper Half)',
    'Vice Admiral',
    'Chief of Naval Operations',
    'Commandant of the Coast Guard',
    'Admiral',
    'Fleet Admiral'
];

var spaceforceRanks = [
    'Airman Basic',
    'Airman',
    'Airman First Class',
    'Senior Airman',
    'Staff Sergeant',
    'Technical Sergeant',
    'First Sergeant (Master Sergeant)',
    'First Sergeant (Senior Master Sergeant)',
    'First Sergeant (Chief Master Sergeant)',
    '2nd Lieutenant',
    '1st Lieutenant',
    'Captain',
    'Major',
    'Lieutenant Colonel',
    'Colonel',
    'Brigadier General',
    'Major General',
    'Lieutenant General',
    'Air Force Chief of Staff General',
    'General of the Air Force',
    'Not listed'
];

$("document").ready(function () {

    //dialog

    $("#dialogBoxLanding").dialog({
        draggable: false,
        resizable: false,
        modal: true,
        width: 500,
        buttons: {
            "Let's get baking!": function () {
                $(this).dialog('close');
            }
        } //end button
    }); // end dialogBoxLanding

    //build dialog box for final submit
    $("#dialogBoxFinalSubmit").dialog({
        draggable: false,
        resizable: false,
        modal: true,
        autoOpen: false,
        buttons: {
            "Confirm & Submit": function () {
                $(this).dialog('close');
                // change button to submit, add submit handler, send it off ...
            },
            "Decline & Return to Start": function () {
                $(this).dialog('close');
                $("#tabSet").tabs({
                    disabled: [1, 2, 3, 4, 5],
                    heightStyle: "content",
                    active: 0
                });
            }
        }
    }); //end dialogBoxFinalSubmit
    
    // final submit confirmation
    $("#submitDisclaimer").click(function (e) {
        e.preventDefault();
        $("#dialogBoxFinalSubmit").dialog("open");

    });

    // TABS CODE START

    //initialize tabSet, make it so only the first tab can be viewed
    $("#tabSet").tabs({
        //disabled : [1,2,3,4,5],
        //hieght options: fill, content, auto
        heightStyle: "content",
        active: 0
    }); // end tabSet initialization

    // on click, validate #infoForm, move to next tab if so
    $("#submitInfo").click(function () {
        if ($("#infoFormSet4").valid()) {
            $("#tabSet").tabs({
                disabled: [0,2,3,4,5],
                heightStyle: "content",
                active: 1
            }); //end next tab
        } //end if 

    }); //end submitInfo click

    // on click, validate #edForm, move to next tab if so
    $("#submitEd").click(function () {
        validate_stateDeg2();
        if ($("#edFormSet4").valid()) {
            $("#tabSet").tabs({
                disabled: [0,1,3,4,5],
                heightStyle: "content",
                active: 2
            }); //end next tab
        } //end if 
    }); //end submitEd click

    // on click, validate #refForm, move to next tab if so
    $("#submitRef").click(function () {
        if ($("#refFormSet3").valid()) {
            $("#tabSet").tabs({
                disabled: [0,1,2,4,5],
                heightStyle: "content",
                active: 3
            }); //end next tab
        } //end if 
    }); //end submitRef click


    //first job skip to next tab
    $("#firstJobSkip").click(function () {
        $("#tabSet").tabs({
            disabled: [0,1,2,3,5],
            heightStyle: "content",
            active: 4
        }); //end next tab        

    }); //end firstJobSkip

    // on click, validate #employFormSet3, move to next tab if so
    $("#submitEmploy").click(function () {
        // see if the state is valid
        validate_empState3();
        if ($("#employFormSet3").valid()) {
            $("#tabSet").tabs({
                disabled: [0,1,2,3,5],
                heightStyle: "content",
                active: 4
            }); //end next tab
        } //end if 
    }); //end submitEd click


    // on click, validate milFormSet1, move to next tab if so
    $("#submitMil1").click(function () {

        //open next tab

        $("#tabSet").tabs({
            disabled: [0, 1, 2, 3, 4],
            heightStyle: "content",
            active: 5
        }); //end next tab

    }); //end submitEd click


    // on click, validate milFormSet2, move to next tab if so
    $("#submitMil2").click(function () {
        // check to make sure a branch was selected
        if ($("#selectBranch").val() == "choose") {
            $("#selectBranchError").html("You must choose a branch.");
        } else {
            $("#selectBranchError").html("");
        }
        // see if a discharge type was selected
        if ($("#dischargee").val() == "choose") {
            $("#dischargeeError").html("You must choose a type of discharge.");
        } else {
            $("#dischargeeError").html("");
        }
        // make sure a rank was typed in
        if ($("#rank").val() == "") {
            $("#rankError").html("You must choose a rank.");
        } else {
            $("#rankError").html("");
        }

        //check if the rest is valid
        if ($("#milFormSet2").valid()) {
            $("#tabSet").tabs({
                disabled: [0, 1, 2, 3, 4],
                heightStyle: "content",
                active: 5
            }); //end next tab
        } //end if 
    }); //end submitEd click

    /*
    
    //work in progress. Concept: Finished and validated a tab, but the user wants to go back to a completed tab and change something.
    // 1. make any previously completed enabled
    // 2. write some code that checks again if the input is valid when the tab is clicked
    
    //code that validates anything that was reviewed and changed
    $("a[href='#education']").click(function(){
       // make sure tab 1 is valid
        if ($("#infoFormSet1").valid()) {
            $("#tabSet").tabs({active: 1});
            
        }else {
            $("#tabSet").tabs({active: 0});
        }
        
    });//end click
    
*/

    // FORM VALIDATION START

    // validate for infoFormSet1
    $("#infoFormSet1").validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },

            address: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            zipcode: {
                required: true,
                zipcodePostalCode: true
            },
            phone1: {
                required: true,
                minlength: 14,
                maxlength: 14
            },
            email: {
                required: true,
                email: true
            },
            dateOfBirth: {
                required: true
            }
        }, //end rules 
        //validation messages
        messages: {
            firstName: "Please enter your first name.",
            lastName: "Please enter your last name.",
            address: "Please enter your address.",
            city: "Please enter the city that you live in.",
            state: "Please select a state.",
            zipcode: "Please enter your zip.",
            phone1: "Please enter a phone number.",
            email: "Please give us an email address.",
            dateOfBirth: "Please enter your date of birth."

        }, //end messages
        // ignore these things
        ignore: ":hidden"
    }); //end validate  for infoForm1


    // validate for infoFormSet2
    $("#infoFormSet2").validate({
        rules: {
            // infoFormSet 2
            position: {
                required: true
            },
            dateOfAvail: {
                required: true
            },
            salary: {
                required: true
            },
            workedBefore: {
                required: true
            },
            whenWorkedBefore: {
                required: true
            }

        }, //end rules 
        //validation messages
        messages: {
            position: "Please select the one for which you are applying.",
            dateOfAvail: "Please enter the first date that you could work.",
            salary: "Please enter your desired salary.",
            workedBefore: "Have you previously worked here?",
            whenWorkedBefore: "Please enter some information about when you worked here before."
        }, //end messages
        // ignore these things
        ignore: ":hidden"
    }); //end validate  for infoForm2

    // validate for infoFormSet3
    $("#infoFormSet3").validate({
        rules: {
            //infoFormSet3
            citizen: {
                required: true
            },
            authorized: {
                required: true
            },
            socSec: {
                required: true,
                minlength: 11,
                maxlength: 11
            },
            felon: {
                required: true
            },
            felonyExplain: {
                required: true
            }
        }, //end rules 
        //validation messages
        messages: {
            citizen: "Are you a U.S. citizen?",
            authorized: "Please let us know if you are authorized to work in the US.",
            socSec: "Please enter your social security number.",
            felon: "Please let us know if you have committed a felony.",
            felonyExplain: "Please enter some information about your conviction."
        }, //end messages
        // ignore these things
        ignore: ":hidden"
    }); //end validate  for infoForm3

    // validate for infoFormSet4
    $("#infoFormSet4").validate({
        rules: {
            Q1: {
                required: true
            },
            Q2: {
                required: true
            }

        }, //end rules 
        //validation messages
        messages: {
            Q1: "Please answer the question.",
            Q2: "Pleaser answer the question."

        }, //end messages
        // ignore these things
        ignore: ":hidden"
    }); //end validate  for infoForm4


    // validate for the education form
    $("#edFormSet1").validate({
        rules: {
            highSchool: {
                required: true
            },
            city: {
                required: true
            },
            stateHS: {
                required: true
            },
            grad: {
                required: true
            },
            currentHS: {
                required: true
            },
            hsDateFrom: {
                required: true
            },
            hsDateTo: {
                required: true
            },
            hSDiploma: {
                required: true
            }
        }, //end rules
        messages: {
            highSchool: "Please enter your High School Name.",
            city: "Please enter the city that you live in.",
            stateHS: "Please select a state.",
            grad: "Please let us know if you graduated high school.",
            currentHS : "Currently attending?",
            hsDateFrom: "Start date?",
            hsDateTo: "End date?",
            hSDiploma: "Please enter the type of diploma you have."
        }, //end messages
        // ignore validation rules on all things class "optional"
        ignore: ":hidden"

    }); //end edFormSet1 validate


    // valdiate for edFormSet2
    $("edFormSet2").validate({
        rules: {
            addDegrees: {
                required: true
            }

        }, //end rules
        messages: {
            addDegrees: "Click yes to fill out information on types of degrees or certificates."

        }, //end messages
        ignore: ":hidden"

    });

    // validate for edFormSet3
    $("#edFormSet3").validate({
        rules: {
            degree1: {
                required: true
            },
            institution1: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            degree1Grad: {
                required: true
            },
            hsDateFrom: {
                required: true
            },
            hsDateTo: {
                required: true
            }

        }, //end rules
        messages: {
            degree1: "Please specify degree type and title.",
            institution1: "Please enter the insitution name.",
            city: "Please enter the city that you live in.",
            state: "Please select a state.",
            degree1Grad: "Please let us know if you have graduated.",
            hsDateFrom: "Start date?",
            hsDateTo: "End date?"
        }, //end messages
        // ignore validation rules on all things class "optional"
        ignore: ":hidden"

    }); //end edFormSet3 validate

    // validate for edFormSet4
    $("#edFormSet4").validate({
        rules: {
            degree1: {
                required: true
            },
            institution1: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            degree2Grad: {
                required: true
            },
            hsDateFrom: {
                required: true
            },
            hsDateTo: {
                required: true
            }

        }, //end rules
        messages: {
            degree1: "Please specify degree type and title.",
            institution1: "Please enter the insitution name.",
            city: "Please enter the city that you live in.",
            state: "Please select a state.",
            degree2Grad: "Please let us know if you have graduated.",
            hsDateFrom: "Start date?",
            hsDateTo: "End date?"
        },
        ignore: ":hidden"

    }); //end edFormSet4 validate


    // validate for the references form
    $("#refFormSet1").validate({

        rules: {
            refFullName: {
                required: true
            },
            refRelationship: {
                required: true
            },
            refCompanyName: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }

        }, // end rules
        messages: {
            refFullName: "Please enter your reference's full name.",
            refRelationship: "Please enter your relationship to your reference.",
            refCompanyName: "Please enter your reference's company name.",
            phone: "Please enter a phone number.",
            email: "Please give us your reference's email."
        }, // end messages

        // ignore validation rules on all things class "optional"
        ignore: ":hidden"

    }); // end reference form validate

    // validate for refFormSet2
    $("#refFormSet2").validate({

        rules: {
            refFullName: {
                required: true
            },
            refRelationship: {
                required: true
            },
            refCompanyName: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }

        }, // end rules
        messages: {
            refFullName: "Please enter your reference's full name.",
            refRelationship: "Please enter your relationship to your reference.",
            refCompanyName: "Please enter your reference's company name.",
            phone: "Please enter a phone number.",
            email: "Please give us your reference's email."
        }, // end messages

        // ignore validation rules on all things class "optional"
        ignore: ":hidden"

    }); // end refFormSet2

    // validate for refFormSet3
    $("#refFormSet3").validate({

        rules: {
            refFullName: {
                required: true
            },
            refRelationship: {
                required: true
            },
            refCompanyName: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }

        }, // end rules
        messages: {
            refFullName: "Please enter your reference's full name.",
            refRelationship: "Please enter your relationship to your reference.",
            refCompanyName: "Please enter your reference's company name.",
            phone: "Please enter a phone number.",
            email: "Please give us your reference's email."
        }, // end messages

        // ignore validation rules on all things class "optional"
        ignore: ":hidden"

    }); // end refFormSet3

    // validate for the previous employment form

    $("#employForm").validate({
        ignore: "hidden",
        rules: {
            firstJob: {
                required: true
            }
        },
        messages: {
            firstJob: "Click yes if this would be your first job."
        }
    }); //end employForm valiation rules


    $("#employFormSet1").validate({

        rules: {
            // first employment form rules
            employComp1: {
                required: true
            },
            empAddress1: {
                required: true
            },
            empCity1: {
                required: true
            },
            empState1: {
                required: true
            },
            empZipcode1: {
                required: true,
                zipcodePostalCode: true
            },
            empPhone1: {
                required: true,
                minlength: 14,
                maxlength: 14
            },
            employSupervisor1: {
                required: true
            },
            employJobTitle1: {
                required: true
            },
            startSalary1: {
                required: true
            },
            endSalary1: {
                required: true
            },
            employRespons1: {
                required: true
            },
            empDateStart1: {
                required: true
            },
            empDateEnd1: {
                required: true
            },
            contactEmployer1: {
                required: true
            }
        }, // end rules

        messages: {

            // first employment form messages
            employComp1: "Please enter the company name.",
            empAddress1: "Please enter the address.",
            empCity1: "Please enter the city that you live in.",
            empState1: "Please select a state.",
            empZipcode1: "Please enter a zip code",
            empPhone1: "Please enter a phone number.",
            employSupervisor1: "Please enter the name of your supervisor.",
            employJobTitle1: "What was your previous job title?",
            startSalary1: "Starting salary?",
            endSalary1: "Ending salary?",
            employRespons1: "Please list some of the responsibilities you had with this job.",
            empDateStart1: "Start date?",
            empDateEnd1: "End date?",
            contactEmployer1: "Can we contact this employer?"

        },
        ignore: ":hidden"


    }); // end formEmply validate

    //start employFormSet2 rules
    $("#employFormSet2").validate({
        ignore: ":hidden, .unValidizate",
        rules: {
            employComp2: {
                required: true
            },
            empAddress2: {
                required: true
            },
            empCity2: {
                required: true
            },
            empState2: {
                required: true
            },
            empZipcode2: {
                required: true,
                zipcodePostalCode: true
            },
            empPhone2: {
                required: true,
                minlength: 14,
                maxlength: 14
            },
            employSupervisor2: {
                required: true
            },
            employJobTitle2: {
                required: true
            },
            startSalary2: {
                required: true
            },
            endSalary2: {
                required: true
            },
            employRespons2: {
                required: true
            },
            empDateStart2: {
                required: true
            },
            empDateEnd2: {
                required: true
            },
            contactEmployer2: {
                required: true
            }
        }, // end rules
        messages: {
            employComp2: "Please enter the company name.",
            empAddress2: "Please enter the address.",
            empCity2: "Please enter the city that you live in.",
            empState2: "Please select a state.",
            empZipcode2: "Please enter a zip code",
            empPhone2: "Please enter a phone number.",
            employSupervisor2: "Please enter the name of your supervisor.",
            employJobTitle2: "What was your previous job title.",
            startSalary2: "Starting salary?",
            endSalary2: "Ending salary?",
            employRespons2: "Please list some of the responsibilities you had with this job.",
            empDateStart2: "Start date?",
            empDateEnd2: "End date?",
            contactEmployer2: "Can we contact this employer?"
        }

    }); // end employFormSet2 validate

    //start employFormSet3 rules
    $("#employFormSet3").validate({
        ignore: ":hidden, .unValidizate",
        rules: {
            employComp3: {
                required: true
            },
            empAddress3: {
                required: true
            },
            empCity3: {
                required: true
            },
            empState3: {
                required: true
            },
            empZipcode3: {
                required: true,
                zipcodePostalCode: true
            },
            empPhone3: {
                required: true,
                minlength: 14,
                maxlength: 14
            },
            employSupervisor3: {
                required: true
            },
            employJobTitle3: {
                required: true
            },
            startSalary3: {
                required: true
            },
            endSalary3: {
                required: true
            },
            employRespons3: {
                required: true
            },
            empDateStart3: {
                required: true
            },
            empDateEnd3: {
                required: true
            },
            contactEmployer3: {
                required: true
            }
        }, // end rules
        messages: {
            employComp3: "Please enter the company name.",
            empAddress3: "Please enter the address.",
            empCity3: "Please enter the city that you live in.",
            empState3: "Please select a state.",
            empZipcode3: "Please enter a zip code",
            empPhone3: "Please enter a phone number.",
            employSupervisor3: "Please enter the name of your supervisor.",
            employJobTitle3: "What was your previous job title.",
            startSalary3: "Starting salary?",
            endSalary3: "Ending salary?",
            employRespons3: "Please list some of the responsibilities you had with this job.",
            empDateStart3: "Start date?",
            empDateEnd3: "End date?",
            contactEmployer3: "Can we contact this employer?"
        }
    }); // end employFormSet3 validate

    // validate for the military form
    $("#milFormSet1").validate({
        rules: {
            ynMilitary: {
                required: true
            }
        }, //end rules
        messages: {
            ynMilitary: "Please indicate if you served or not.",

        }, // end messages
        ignore: ":hidden"
    });


    // validate for the military form
    $("#milFormSet2").validate({
        rules: {
            branch: {
                required: true,
                notChoose: ""
            },
            dateStart: {
                required: true
            },
            dateEnd: {
                required: true
            },
            rank: {
                required: true
            },

            discharge: {
                required: true
            },
            dischargeExplain: {
                required: true
            }
        }, //end rules
        messages: {
            ynMilitary: "Please indicate if you served or not.",
            branch: "Please select the branch of the military that you served in.",
            dateStart: "Start date?",
            dateEnd: "End date?",
            rank: "Please enter your rank at discharge.",
            discharge: "Please select the type of discharge.",
            dischargeExplain: "Please enter some information about your discharge."
        }, // end messages
        ignore: ":hidden"
    });

    //custom rules for validation ---NOTE: leaned heavy on this site https://jqueryvalidation.org/category/validator/ for this one

    // make sure that the email has a "dot" something at the end
    /*    $.validator.methods.email = function (value, element) {
            return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
        }
    */
    //way to add more methods to validator
    //jQuery.validator.addMethod( name, method [, message ] )
    
    //at one point I wanted to make a country option but i got lazy. I feel like I have a good grasp of the concept that I could do that if I wanted.
    
    //extra zipcode and postal code method
    jQuery.validator.addMethod("zipcodePostalCode", function (value, element) {
        return this.optional(element) || /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/.test(value);
    }, 'Please enter a zipcode or postal code.');
    /*
        // make a rule for select menus and specify the non valid option
        jQuery.validator.addMethod("notChoose", function (val, ele, arg) {
            return arg !== val;
        }, "Choose one.");
    */
    /*
        jQuery.validator.addClassRules('required1', {
            required: true
        });
    */
    /*******************************************************************************/
    //FORM VALIDATION END
    /*******************************************************************************/

    // DATE CONSTRAINTS

    // initialize datepicker for all dates
    $('.datepicker').datepicker({
        // make the end date not go past the current date
        maxDate: "0"
    });

    $('.datepickerFuture').datepicker({
        // make the end date not go past the current date
        minDate: "0"
    });

    // END DATE CONTRAINTS

    // START jQuery UI code and other Style considerations

    $('input[type="file"], input[type=button], button').button();
    $("input[type='checkbox'], input[type='radio']").checkboxradio();

    $("select").selectmenu({
        width: 226
    });

    // END jQuery UI code


    // START HIDE ELEMENTS AND SKIP LOGIC
    // hide everything that can be skipped    
    $(".skip").hide();
    $(".show").show();


    /********************************************************************/

    //script for applicant information page

    /********************************************************************/

    // accordian for information tab
    $("#infoAccordion").accordion({
        //for help with validation, make it so one is always open
        collapsible: false,
        heightStyle: "content",
        active: 0
    }); //end accordion


    //show and hide functions

    // skip for applicant infomation tab, work authorization
    $("#yesCit").click(function () {
        $("#workAuthorization").hide(100);
    }); //end click function
    $("#noCit").click(function () {
        $("#workAuthorization").show(800);
    }); //end click function

    // skip for applicant infomation tab, worked before
    $("#yesWork").click(function () {
        $("#whenWorkedBefore").show(800);
    }); //end click function
    $("#noWork").click(function () {
        $("#whenWorkedBefore").hide(100);
    }); //end click function

    // skip for applicant infomation tab, felonyExplain
    $("#yesFel").click(function () {
        $("#felonyExplain").show(800);
    }); //end click function
    $("#noFel").click(function () {
        $("#felonyExplain").hide(100);
    }); //end click function


    // adds required questions based on the position applied for

    $("select[name='position']").on("selectmenuchange", function () {

        if ($("select[name='position']").val() == "baker") {
            // add this question
            $("#insertQ").load("position_questions.html #baker");

        } else if ($("select[name='position']").val() == "frontTeam") {
            $("#insertQ").load("position_questions.html #frontTeam");

        } else if ($("select[name='position']").val() == "decorator") {
            $("#insertQ").load("position_questions.html #decorator");

        } else if ($("select[name='position']").val() == "driver") {
            $("#insertQ").load("position_questions.html #driver", function () {
                $("input[type='checkbox'],input[type='radio']").checkboxradio();
            });//end load

        } else if ($("select[name='position']").val() == "any") {
            // add this question
            console.log("any");

        } //end else       
    }); //end select menu change autocomplete


    // SECTION THAT doesn't let user fill out accordions out of order
    /* make the accordion validate before moving on
         - double check to make sure the first accordion is still valid so that it can't be skipped over from first landing on the tab or at any other point
    */

    //start accordHeadInfo2 click function
    $("#accordHeadInfo2").click(function () {
        //if the first option for state is selected, it creates its own error
        if ($("select[name='state']").val() == "choose") {
            //send error message out to the label div beneath the select element
            $("#stateError").html("You must choose a state.");
        } else {
            $("#stateError").html("");
        }
        //if the first part is valid
        if ($("#infoFormSet1").valid()) {
            //if value of select is name = 'choose'
            if ($("select[name='state']").val() == "choose") {
                return;
            }
            //do this
            $("#infoAccordion").accordion("option", "active", 1);
        } else {
            $("#infoAccordion").accordion("option", "active", 0);
        }
    }); //end accordHeadInfo1 click function

    //start accordHeadInfo3 click function
    $("#accordHeadInfo3").click(function () {
        //if the first accordion tab is valid
        if ($("#infoFormSet1").valid()) {
            //open the second tab
            $("#infoAccordion").accordion("option", "active", 1);
            //see if the second tab is valid
            if ($("#infoFormSet2").valid()) {
                //let them go to tab 3
                $("#infoAccordion").accordion("option", "active", 2);
            } else {
                //take it back to the 2nd tab
                $("#infoAccordion").accordion("option", "active", 1);
            }
        } else {
            //kick them back to the first tab
            $("#infoAccordion").accordion("option", "active", 0);
        } //end the if/else statement
    }); //end accordHeadInfo2 click function

    //start accordHeadInfo4 click function
    $("#accordHeadInfo4").click(function () {
        //if the first accordion tab is valid
        if ($("#infoFormSet1").valid()) {
            //open the second tab
            $("#infoAccordion").accordion("option", "active", 1);
            //see if the second tab is valid
            if ($("#infoFormSet2").valid()) {
                //open the third tab
                $("#infoAccordion").accordion("option", "active", 2);
                //see if the third tab is valid
                if ($("#infoFormSet3").valid()) {
                    //let them go to tab 4
                    $("#infoAccordion").accordion("option", "active", 3);
                } else {
                    //go to tab 3
                    $("#infoAccordion").accordion("option", "active", 2);
                }
            } else {
                //take it back to the 2nd tab
                $("#infoAccordion").accordion("option", "active", 1);
            }
        } else {
            //kick them back to the first tab
            $("#infoAccordion").accordion("option", "active", 0);
        } //end the outermost if/else statement
    }); //end accordHeadInfo3 click function


    /********************************************************************/

    //script for education page

    /********************************************************************/


    $("#edAccordion").accordion({
        active: 0,
        collapsible: false,
        heightStyle: "content"

    }); // end edAccordion


    // the skip and hide logic

    // skip for education tab, graduated highschol
    $("#yesGrad").click(function () {
        //set up the what inputs are relevant
        $("#hsDateFrom").show(800);
        $("#hsDateTo").show(800);
        $("#hSDiploma").show(800);
        $("#currentHS").hide(100);
        $("#hsDateTo label").text("End date");
    }); //end click function

    $("#noGrad").click(function () {
        //set up the what inputs are relevant
        $("#hsDateFrom").hide(100);
        $("#hsDateTo").hide(100);
        $("#hSDiploma").hide(100);
        $("#currentHS").show(800);
    }); //end click function

    // skip for education tab, currently in highschol
    $("#yesCurrentHS").click(function () {
        $("#hsDateFrom").show(800);
        $("#hsDateTo label").text("Last date of attendance");
        $("#hsDateTo").show(800);
    }); //end click function

    $("#noGrad").click(function () {
        $("#hsDateFrom").show(800);

        // change #hsDateTo label to "Last date of attendance."
        $("#hsDateTo label").text("Last date of attendance");
        $("#hsDateTo").show(800);
    }); //end click function

    $("#degree1GradYes").click(function () {
        $("#degree1From").show(800);
        $("#degree1To").show(800);
        $("#degree1To label").text("Graduation date");
    }); //end click

    $("#degree1GradNo").click(function () {
        $("#degree1From").show(800);
        $("#degree1To label").text("Last date of attendance");
        $("#degree1To").show(800);
    }); //end click

    $("#degree2GradYes").click(function () {
        $("#degree2From").show(800);
        $("#degree2To").show(800);
        $("#degree2To label").text("Graduation date");
    }); //end click

    $("#degree2GradNo").click(function () {
        $("#degree2From").show(800);
        $("#degree2To label").text("Last date of attendance");
        $("#degree2To").show(800);
    }); //end click

    $("#yesAddDegrees").click(function () {
        $("#edAccordion").accordion("option", "active", 2);
    });
    $("#noAddDegrees").click(function () {
            $("#noAddDegrees2").show(800);
        
    }); //end noAddDegrees
    
    
    //skip the first degree group
    $("#skipDegree1").click(function () {
        if ($(this).prop("checked") == true) {
            $("#degree1Hide").hide(800);

            $("#employAccordion").accordion({
                active: 3
            });

        } else if ($(this).prop("checked") == false) {
            $("#degree1Hide").show(100);
        }
    }); //end click skipEmploy1

    //skip the second degree group
    $("#skipDegree2").click(function () {
        if ($(this).prop("checked") == true) {
            $("#degree2Hide").hide(100);

        } else if ($(this).prop("checked") == false) {
            $("#degree2Hide").show(800);
        }
    }); //end click skipEmploy2


    
        // on click, validate #edForm, move to next tab if so
    $("#submitEd2").click(function () {
        validate_stateDeg2();
        if ($("#edFormSet4").valid()) {
            $("#tabSet").tabs({
                disabled: [0,1,3,4,5],
                heightStyle: "content",
                active: 2
            }); //end next tab
        } //end if 
    }); //end submitEd click


    //start accordionHeadEd2 click function
    $("#accordionHeadEd2").click(function () {
        //if the first option for state is selected, it creates an error
        validate_stateHS();
        //if the first accordion tab is valid
        if ($("#edFormSet1").valid()) {
            //open the second tab 
            $("#edAccordion").accordion("option", "active", 1);
        } else {
            //kick them back to the first tab
            $("#edAccordion").accordion("option", "active", 0)
        } //end the if/else statement
    }); //end accordHeadEd2 click function

    //start accordHeadEd3 click function
    $("#accordionHeadEd3").click(function () {

        //if the first option for state is selected, it creates an error
        validate_stateHS();

        //if the first accordion tab is valid
        if ($("#edFormSet1").valid()) {
            //open the second tab and
            $("#edAccordion").accordion("option", "active", 1);
            //see if the second tab is valid
            if ($("#edFormSet2").valid()) {
                //let them go to tab 3
                $("#edAccordion").accordion("option", "active", 2);
            } else {
                //take it back to the 2nd tab
                $("#edAccordion").accordion("option", "active", 1);
            }
        } else {
            //kick them back to the first tab
            $("#edAccordion").accordion("option", "active", 0)
        } //end the if/else statement
    }); //end accordHeadEd3 click function

    //start accordHeadEd4 click function
    $("#accordionHeadEd4").click(function () {

        //if the first option for state is selected, it creates an error
        validate_stateHS();

        //if the first accordion tab is valid
        if ($("#edFormSet1").valid()) {
            //open the second tab
            $("#edAccordion").accordion("option", "active", 1);
            //see if the second tab is valid
            if ($("#edFormSet2").valid()) {
                //open the third tab
                $("#edAccordion").accordion("option", "active", 2);

                //validate the menu          
                validate_stateDeg1();

                //see if the third tab is valid
                if ($("#edFormSet3").valid()) {
                    //let them go to tab 4
                    $("#edAccordion").accordion("option", "active", 3);
                } else {
                    //go to tab 3
                    $("#edAccordion").accordion("option", "active", 2);
                }
            } else {
                //take it back to the 2nd tab
                $("#edAccordion").accordion("option", "active", 1);
            }
        } else {
            //kick them back to the first tab
            $("#edAccordion").accordion("option", "active", 0);
        } //end the outermost if/else statement
    }); //end accordHeadEd3 click function


    // function that adds validation for selecting stateHS
    function validate_stateHS() {
        //if the first option for state is selected, it creates an error
        if ($("select[name='stateHS']").val() == "choose") {
            //send error message out to the label div beneath the select element
            $("#stateErrorHS").html("You must choose a state.");
        } else {
            $("#stateErrorHS").html("");
        }
    }

    // function that adds validation for selecting stateDeg1
    function validate_stateDeg1() {
        //see if the state menu is valid
        if ($("select[name='stateDeg1']").val() == "choose") {
            //send error message out to the label div beneath the select element
            $("#stateErrorStateDeg1").html("You must choose a state.");
        } else {
            $("#stateErrorStateDeg1").html("");
        }
    }

    // function that adds validation for selecting stateDeg2
    function validate_stateDeg2() {
        //see if the state menu is valid
        if ($("select[name='stateDeg2']").val() == "choose") {
            //send error message out to the label div beneath the select element
            $("#stateErrorStateDeg2").html("You must choose a state.");
        } else {
            $("#stateErrorStateDeg2").html("");
        }
    }

    /********************************************************************/

    //script for reference page

    /********************************************************************/

    $("#refAccordion").accordion({
        active: 0,
        collapsible: false,
        heightStyle: "content"
    }); //ref accordion end

    //start accordionHeadRef2 click function
    $("#accordionHeadRef2").click(function () {

        //if the first accordion tab is valid
        if ($("#refFormSet1").valid()) {
            //open the second tab 
            $("#refAccordion").accordion("option", "active", 1);
        } else {
            //kick them back to the first tab
            $("#refAccordion").accordion("option", "active", 0)
        } //end the if/else statement
    }); //end accordionHeadRef2 click function


    //start accordionHeadRef3 click function
    $("#accordionHeadRef3").click(function () {

        //if the first accordion tab is valid
        if ($("#refFormSet1").valid()) {
            //open the second tab and
            $("#refAccordion").accordion("option", "active", 1);
            //see if the second tab is valid
            if ($("#refFormSet2").valid()) {
                //let them go to tab 3
                $("#refAccordion").accordion("option", "active", 2);
            } else {
                //take it back to the 2nd tab
                $("#refAccordion").accordion("option", "active", 1);
            }
        } else {
            //kick them back to the first tab
            $("#refAccordion").accordion("option", "active", 0)
        } //end the if/else statement
    }); //end accordHeadEd3 click function


    /********************************************************************/

    //script for previous employment page

    /********************************************************************/


    // code for skip and hide    

    // skip for applicant previous employment tab, firstJob
    $("#yesFirstJob").click(function () {
        $("#firstJobSkipDiv").show(800);

    }); //end click function

    // skip filling out information if first job
    $("#noFirstJob").click(function () {
        $("#employAccordion").accordion({
            active: 1
        });
        $("#firstJobSkipDiv").hide(100);
    }); //end click function

    // this group of code is for the skip section button in the previous employment accordion

    //skip the first employment group
    $("#skipEmploy1").click(function () {
        if ($(this).prop("checked") == true) {
            $("#previousEmployment1").hide(800);

            $("#employAccordion").accordion({
                active: 2
            });

        } else if ($(this).prop("checked") == false) {
            $("#previousEmployment1").show(100);
        }
    }); //end click skipEmploy1

    //skip the second employment group
    $("#skipEmploy2").click(function () {
        if ($(this).prop("checked") == true) {
            $("#previousEmployment2").hide(100);
            $("#employAccordion").accordion({
                active: 3
            });
        } else if ($(this).prop("checked") == false) {
            $("#previousEmployment2").show(800);
        }
    }); //end click skipEmploy2

    //skip the third employment group
    $("#skipEmploy3").click(function () {
        if ($(this).prop("checked") == true) {

            //hide the content but leave the "move on" button
            $("#previousEmployment3").hide(200);


        } else if ($(this).prop("checked") == false) {

            $("#previousEmployment3").show(800);
        }
    }); //end click skipEmploy3    

    // accordian for employment tab
    $("#employAccordion").accordion({
        collapsible: false,
        heightStyle: "content",
        active: 0
    }); //end accordion


    // SECTION THAT doesn't let user fill out accordions out of order
    /* make the accordion validate before moving on
         - double check to make sure the first accordion is still valid so that it can't be skipped over from first landing on the tab or at any other point
    */

    //start accordHeadEmploy1 click function
    $("#accordHeadEmploy1").click(function () {
        //if the first part is valid
        if ($("#employForm").valid()) {
            //do this
            $("#employAccordion").accordion("option", "active", 1);
        } else {
            $("#employAccordion").accordion("option", "active", 0);
        }
    }); //end accordHeadEmploy1 click function

    //start accordHeadEmploy2 click function
    $("#accordHeadEmploy2").click(function () {
        //if the first accordion tab is valid
        if ($("#employForm").valid()) {
            //open the second tab and 
            $("#employAccordion").accordion("option", "active", 1);

            // check to see if a state has been chosen
            validate_empState1();

            //see if the second tab is valid
            if ($("#employFormSet1").valid()) {
                //let them go to tab 3
                $("#employAccordion").accordion("option", "active", 2);
            } else {
                //take it back to the 2nd tab
                $("#employAccordion").accordion("option", "active", 1);
            }
        } else {
            //kick them back to the first tab
            $("#employAccordion").accordion("option", "active", 0);
        } //end the if/else statement
    }); //end accordHeadEmploy2 click function

    //start accordHeadEmploy3 click function
    $("#accordHeadEmploy3").click(function () {
        //if the first accordion tab is valid
        if ($("#employForm").valid()) {
            //open the second tab and 
            $("#employAccordion").accordion("option", "active", 1);

            validate_empState1();
            //see if the second tab is valid
            if ($("#employFormSet1").valid()) {
                //open the third tab and 
                $("#employAccordion").accordion("option", "active", 2);

                validate_empState2();

                //see if the third tab is valid
                if ($("#employFormSet2").valid()) {
                    //let them go to tab 4
                    $("#employAccordion").accordion("option", "active", 3);
                } else {
                    //go to tab 3
                    $("#employAccordion").accordion("option", "active", 2);
                }
            } else {
                //take it back to the 2nd tab
                $("#employAccordion").accordion("option", "active", 1);
            }
        } else {
            //kick them back to the first tab
            $("#employAccordion").accordion("option", "active", 0);
        } //end the outermost if/else statement
    }); //end accordHeadEmploy3 click function


    function validate_empState1() {
        if ($("select[name='empState1']").val() == "choose") {
            $("#empState1Error").html("You must choose a state.");
        } else {
            $("#empState1Error").html("");
        }
    } //end validate_empState1 function

    function validate_empState2() {
        if ($("select[name='empState2']").val() == "") {
            $("#empState2Error").html("You must choose a state.");
        } else {
            $("#empState2Error").html("");
        }
    } //end validate_empState1 function


    function validate_empState3() {
        if ($("select[name='empState3']").val() == "choose") {
            $("#empState3Error").html("You must choose a state.");
        } else {
            $("#empState3Error").html("");
        }
    } //end validate_empState1 function


    /********************************************************************/

    //start script for military service page

    /********************************************************************/


    $("#milAccordion").accordion({
        active: 0,
        collapsible: false,
        heightStyle: "content"
    });

    //start accordHeadEmploy1 click function
    $("#accordHeadMil2").click(function () {
        //if the first part is valid
        if ($("#milFormSet1").valid()) {
            //do this
            $("#milAccordion").accordion("option", "active", 1);
        } else {
            $("#milAccordion").accordion("option", "active", 0);
        }
    }); //end accordHeadEmploy1 click function



    // skips for military tab
    $("#noMil").click(function () {

        $("#submitMil1Div").show(800);
        $("#accordHeadMil2").hide(100);
    });
    $("#yesMil").click(function () {
        $("#submitMil1Div").hide(100);
        $("#milAccordion").accordion("option", "active", 1);
        $("#accordHeadMil2").show(800);
    });

    //adds field to explain type of discharge


    // adds the explaination div if other than honorable discharge
    $("#dischargee").on("selectmenuchange", function () {
        if ($("select[name='discharge']").val() !== "honorable") {
            $("#dischargeExplain").show(800);
        } else {
            $("#dischargeExplain").hide(100);
        } //end else
    });




    //START AUTOCOMPLETE


    // narrows autocomplete for rank based on branch selection
    $("#selectBranch").on("selectmenuchange", function () {

        if ($("#selectBranch").val() == "airForce") {
            $('#rank').autocomplete({
                source: airforceRanks
            });
        } else if ($("#selectBranch").val() == "army") {
            $('#rank').autocomplete({
                source: armyRanks
            });
        } else if ($("#selectBranch").val() == "coastGuard") {
            $('#rank').autocomplete({
                source: coastguardRanks
            });
        } else if ($("#selectBranch").val() == "marine") {
            $('#rank').autocomplete({
                source: marineRanks
            });
        } else if ($("#selectBranch").val() == "natGuard") {
            $('#rank').autocomplete({
                source: armyRanks
            });
        } else if ($("#selectBranch").val() == "navy") {
            $('#rank').autocomplete({
                source: navyRanks
            });
        } else if ($("#selectBranch").val() == "spaceForce") {
            $('#rank').autocomplete({
                source: spaceforceRanks
            });
        } //end else       
    }); //end select menu change autocomplete



    //END AUTOCOMPLETE

    //start mask
    $(".phone").mask('(000)-000-0000', {
        placeholder: "(319)-000-1234"
    });

    $("input[name=socSec]").mask('000-00-0000', {
        placeholder: "123-456-7890"
    });


}); //end ready
