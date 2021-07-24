$(function () {

    //    loading animation

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1000);


    //    aos initialization 

    AOS.init();

    
    //    scroll to top button
    //    When the user scrolls down 20px from the top of the document, show the button

    mybutton = document.getElementById("myBtn");
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }


    //    Initialize book a table form validation on the registration form.

    $("form[name='booktable']").validate({

        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true,
                minlength: 4
            },
            phone: {
                required: true,
                minlength: 4
            },
            date: {
                required: true,
                minlength: 4
            },
            time: {
                required: true,
                minlength: 4
            },
            people: {
                required: true,
                minlength: 1
            },
            subject: {
                required: true,
                minlength: 4
            },
        },

        messages: {
            name: "Please enter at least 4 chars",
            phone: "Please enter at least 4 chars",
            date: "Please select a date",
            time: "Please select a time",
            people: "Please enter at least 1 chars",
            email: "Please enter a valid email",
            subject: "Please enter at least 10 chars"
        },

        submitHandler: function (form) {
            form.submit();
        }
    });


    //    Initialize send message form validation on the registration form.

    $("form[name='sendmessage']").validate({

        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true,
                minlength: 4
            },
            subject: {
                required: true,
                minlength: 5
            },
        },

        messages: {
            name: "Please enter at least 4 chars",
            email: "Please enter a valid email",
            subject: "Please enter at least 5 chars"
        },

        submitHandler: function (form) {
            form.submit();
        }
    });
});