


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')



particlesJS("particles-js", {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 1800
            }
        },
        color: {
            value: ["#ff5733", "#33ff57", "#3357ff"], // مجموعة من الألوان
            animation: {
                enable: true,
                speed: 20,
                sync: false
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3.5,  // تقليل الحجم
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.3,
            width: 0.5
        },
        move: {
            enable: true,
            speed: 12,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
});

const swiper = new Swiper('.swiper', {
    autoHeight:true ,
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });


  jQuery(document).ready(function() {
    jQuery('.tab-a').click(function(){  
jQuery(".ht-tab-pane").removeClass('tab-active');
jQuery(".ht-tab-pane[id='"+jQuery(this).attr('href')+"']").addClass("tab-active");
jQuery(".tab-a").removeClass('active-a');
jQuery(this).parent().find(".tab-a").addClass('active-a');
return false;
});
});









(function ($) {
    "use strict";   
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    }); 
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    $(document).ready(function() {
        // Initialize CounterUp
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    
        // Other code that uses fadeIn
        $('.some-element').fadeIn();
    });
    
})(jQuery);


function openPanel(title) {
    document.getElementById('sidePanel').classList.add('open');
    document.getElementById('overlay').style.display = 'block';
}

function closePanel() {
    document.getElementById('sidePanel').classList.remove('open');
    document.getElementById('overlay').style.display = 'none';
}

// $(document).ready(function(){
//     $('.question').click(function(){
//       $(this).next('.answer').slideToggle();
//       $(this).find('.toggle').text($(this).next('.answer').is(':visible') ? '-' : '+');
//     });
//   });

function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    const toggleSign = questionElement.querySelector('.toggle-sign');

    // Toggle the active class
    questionElement.classList.toggle('active');

    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block";
        toggleSign.textContent = "-";
    } else {
        answerElement.style.display = "none";
        toggleSign.textContent = "+";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const mainIcon = document.getElementById('main-icon');
    const floatingIcons = document.getElementById('floating-icons');

    mainIcon.addEventListener('click', function() {
        // Toggle the display of the floating icons
        if (floatingIcons.style.display === 'none' || floatingIcons.style.display === '') {
            floatingIcons.style.display = 'block';
        } else {
            floatingIcons.style.display = 'none';
        }
    });
});


// Function to animate the counter
function animateCounter(targetCount, duration) {
    const countElement = document.getElementById('count-number');
    let startCount = 0;
    const stepTime = Math.ceil(duration / targetCount);
    
    const timer = setInterval(() => {
        startCount++;
        countElement.textContent = startCount;
        if (startCount >= targetCount) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Event listener for scroll
window.addEventListener('scroll', function() {
    const countElement = document.getElementById('count-number');
    const rect = countElement.getBoundingClientRect();
    
    // Check if the counter is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateCounter(12, 2000); // Change 12 to the target number and 2000 to the duration in ms
        // Remove the event listener to prevent re-triggering
        window.removeEventListener('scroll', arguments.callee);
    }
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// import translations from "./translations.js"
// const languageSelector = document.querySelector("select");
// languageSelector.addEventListener("change", (event) => {
//   setLanguage(event.target.value);
//   localStorage.setItem("lang", event.target.value);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
//   setLanguage(language);
// });

// const setLanguage = (language) => {
//   const elements = document.querySelectorAll("[data-i18n]");
//   elements.forEach((element) => {
//     const translationKey = element.getAttribute("data-i18n");
//     element.textContent = translations[language][translationKey];
//   });
//   document.dir = language === "ar" ? "rtl" : "ltr";
// };