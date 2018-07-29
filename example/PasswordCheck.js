// Very Simple Example of Password Validation
//
// James Michael McGarrah for OMSCS HCI Course
// Summer 2018
//

$(document).ready(function () {

    //
    // Submit button validation Code Section
    //
    // Setup Submit to be disabled
    //
    // Disabling until have time to fix the state check code
    // Test for value of complexity meter is not working.
    // Better test is the 'confirmbox' status
    /*
    $("#continueButton").attr('disabled', 'disabled');
    $("form").keyup(function() {
        // To Disable Submit Button
        $("#continueButton").attr('disabled', 'disabled');
        // Validating Password field not empty
        //var password = $("#password").val();
        //if (!(password == "")) {
        // Validating Password field meets strength requirements

        // confirmbox is the best method to test
        var result = $("#cups-password-meter-span").width;
        if (result >= 170) {
            // To Enable Submit Button
            $("#continueButton").removeAttr('disabled');
            $("#continueButton").css({
                "cursor": "pointer",
                "box-shadow": "1px 0px 6px #333",
                "background-color": "#4CAF50"
            });
        }
    });
    */

    // On Click for Submit Button
    //
    // Open for later checks on status changes
    //
    /*
    $("#continueButton").click(function() {
        $("#continueButton").css({
            "cursor": "default",
            "box-shadow": "none"
        });
        alert("Password Check Prototype Form Submitted");
    });
    */

    //
    // Password Validation Code Section
    //
    $('#pwbox').keyup(function () {
        $('#length').html(checkLength($('#pwbox').val()))
        $('#letter').html(checkLower($('#pwbox').val()))
        $('#capital').html(checkUpper($('#pwbox').val()))
        $('#number').html(checkSpecial($('#pwbox').val()))
    })

    // length
    function checkLength(password) {
        if (password.length < 8) {
            $('#length').removeClass('strong')
            $('#length').addClass('weak')  // color coded in CSS
            return '<b>&#x2716;</b> Minimum <b>8 characters</b>'
        } else {
            $('#length').removeClass('weak')
            $('#length').addClass('strong')  // color coded in CSS
            return '<b>&#x2714;</b> Minimum <b>8 characters</b>'
        }
    }

    // lower
    function checkLower(password) {
        // If it has numbers and characters, increase strength value.
        if (password.match(/([a-z])/)) {
            $('#letter').removeClass('weak')
            $('#letter').addClass('strong')  // color coded in CSS
            return '<b>&#x2714;</b> A <b>lowercase</b> letter'
        } else {
            $('#letter').removeClass('strong')
            $('#letter').addClass('weak')  // color coded in CSS
            return '<b>&#x2716;</b> A <b>lowercase</b> letter'
        }
    }

    // capital
    function checkUpper(password) {
        // If it has numbers and characters, increase strength value.
        if (password.match(/([A-Z])/)) {
            $('#capital').removeClass('weak')
            $('#capital').addClass('strong')  // color coded in CSS
            return '<b>&#x2714;</b> A <b>capital (uppercase)</b> letter'
        } else {
            $('#capital').removeClass('strong')
            $('#capital').addClass('weak')  // color coded in CSS
            return '<b>&#x2716;</b> A <b>capital (uppercase)</b> letter'
        }
    }

    // number or symbol
    function checkSpecial(password) {
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/) || password.match(/([0-9])/)) {
            $('#number').removeClass('weak')
            $('#number').addClass('strong')  // color coded in CSS
            return '<b>&#x2714;</b> A <b>number</b> or symbol'
        } else {
            $('#number').removeClass('strong')
            $('#number').addClass('weak')  // color coded in CSS
            return '<b>&#x2716;</b> A <b>number</b> or symbol'
        }
    }

});

