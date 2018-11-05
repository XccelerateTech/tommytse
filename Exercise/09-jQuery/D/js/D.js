$(document).ready(function() {
    // validate the input
    function validateForm() {
        var fname = document.forms['myForm']['name'].value;
        var ftel = document.forms['myForm']['phone'].value;
        var femail = document.forms['myForm']['email'].value;
        if (fname.length > 50) {
            alert('The name should be less than 50 characters');
            return false;
        }
        if(isNaN(ftel)) {
            alert('The phone number should be an integer');
            return false;
        } else if (ftel.length > 16 || ftel.length < 6) {
            alert('The phone number should  be between 6 numbers to 16 numbers');
            $('input[name="phone"]').css('color','red');
            return false;
        }

    }
    // clear the input field
    $('#clear-input').on('click', function() {
        $('input[name="name"][name="phone"][name="email"]').ValidityState('');
    });

    $('#form1').submit(function(e) {
        e.preventDefault();
        validateForm();
    });

    $('input').on('keypress', function(event) {
        if(this == '') {
            console.log('hi');
        }
    });
})
