$(document).ready(function () {

$('.slider-container').slick({

    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,

    autoplay: true,
    autoplaySpeed: 2500,   
    speed: 800,            
    cssEase: 'ease-in-out',

    pauseOnHover: true,
    pauseOnFocus: true,

    dots: false,

    prevArrow: `
        <button type="button" class="slick-prev">
            <i class="bi bi-chevron-left"></i>
        </button>
    `,

    nextArrow: `
        <button type="button" class="slick-next">
            <i class="bi bi-chevron-right"></i>
        </button>
    `,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]

});

 $('.feature-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,

    prevArrow: `
        <button type="button" class="slick-prev">
            <i class="bi bi-chevron-left"></i>
        </button>
    `,

    nextArrow: `
        <button type="button" class="slick-next">
            <i class="bi bi-chevron-right"></i>
        </button>
    `,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});

$('.comment-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,

    responsive: [
        {
            breakpoint: 992,   // Tablets
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,   // Large mobiles
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,   // Small mobiles
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$(document).ready(function () {

    $("#vedaForm").validate({

        errorClass: "text-danger",

        rules: {

            name: {
                required: true,
                pattern: /^[A-Za-z ]{3,50}$/
            },

            phone: {
                required: true,
                pattern: /^[6-9]\d{9}$/
            },

            email: {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
            },

            interest: {
                required: true
            },

            message: {
                maxlength: 300
            },

            terms: {
                required: true
            }

        },

        messages: {

            name: {
                required: "Please enter your name",
                pattern: "Only alphabets and spaces are allowed"
            },

            phone: {
                required: "Please enter your phone number",
                pattern: "Enter a valid 10-digit mobile number"
            },

            email: {
                required: "Please enter email",
                pattern: "Invalid email"
            },

            interest: {
                required: "Please select a location"
            },

            message: {
                maxlength: "Maximum 300 characters allowed"
            },

            terms: {
                required: "Please accept the terms and conditions"
            }

        }

    });

});

});

