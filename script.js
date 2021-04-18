$(document).ready(function () {
    var nameflag = 0;
    var mailflag = 0;
    var mobileflag = 0;

    $("#contact-form").submit((e) => {
        e.preventDefault()
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzJEMg9FY47bz1O4hDUjYTIpzktOTe38cHC3GPcG_Nr2xOb9heHJqtks_1VJVzkN9eymA/exec",
            data: $("#contact-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                document.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")

            }
        })
    })

    $( '#contact-form' ).each(function(){
        this.reset();
    });

    $("#nme").blur(function () {
        var username = $(this).val();
        var validname = /^[A-Za-z]+$/;
        if (username.length < 4) {
            $("#namevaliderror").hide();
            $("#namelengtherror").show();
            $("#nme").css("border", "1px solid #dc3545");
            nameflag = 0;
            $("#send").prop('disabled', true);
        }
        else {
            if (validname.test(username)) {
                $("#namelengtherror").hide();
                $("#namevaliderror").hide();
                $("#nme").css("border", "1px solid #ced4da");
                nameflag = 1;
                if (nameflag == 1 && mailflag == 1 && mobileflag == 1) {
                    $("#send").prop('disabled', false);
                }

            }
            else {
                $("#namelengtherror").hide();
                $("#namevaliderror").show();
                $("#nme").css("border", "1px solid #dc3545");
                nameflag = 0;
                $("#send").prop('disabled', true);
            }
        }
    })
    $("#mail").blur(function () {
        var mailid = $(this).val();
        var validmailid = /^[a-z0-9]+\@[a-z]+\.[a-z]+$/;
        if (validmailid.test(mailid)) {
            $("#mailvaliderror").hide();
            $("#mail").css("border", "1px solid #ced4da");
            mailflag = 1;
            if (nameflag == 1 && mailflag == 1 && mobileflag == 1) {
                $("#send").prop('disabled', false);
            }

        }
        else {
            $("#mailvaliderror").show();
            $("#mail").css("border", "1px solid #dc3545");
            mailflag = 0;
            $("#send").prop('disabled', true);

        }
    })
    $("#mobile").blur(function () {
        var number = $(this).val();
        var validnumber = /^[0-9]*$/;
        if (number.toString().length != 10) {
            $("#mobilevaliderror").show();
            $("#mobile").css("border", "1px solid #dc3545");
            mobileflag = 0;
            $("#send").prop('disabled', true);
        } else {
            if (validnumber.test(number)) {
                $("#mobilevaliderror").hide();
                $("#mobile").css("border", "1px solid #ced4da");
                mobileflag = 1;
                if (nameflag == 1 && mailflag == 1 && mobileflag == 1) {
                    $("#send").prop('disabled', false);
                }
            }
            else {
                $("mobilevaliderror").show();
                $("#mobile").css("border", "1px solid #dc3545");
                mobileflag = 0;
                $("#send").prop('disabled', true);
            }
        }
    })

    
    

})
